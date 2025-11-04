import * as vscode from 'vscode';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

let sessionKey: Buffer | null = null;
let currentUserId: string | null = null; // to be set after successful auth

/**
 * Derive session key from password and salt using PBKDF2.
 */
function deriveSessionKey(password: string, saltBase64: string): Buffer {
  const salt = Buffer.from(saltBase64, 'base64');
  return crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha512');
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('env.branch.register', async () => {
      const email = await vscode.window.showInputBox({ prompt: 'Email' });
      if (!email) {
        vscode.window.showErrorMessage('Email is required');
        return;
      }

      const password = await vscode.window.showInputBox({ prompt: 'Master Password', password: true });
      if (!password) {
        vscode.window.showErrorMessage('Password is required');
        return;
      }

      // create salt
      const salt = crypto.randomBytes(16).toString('base64');

      // TODO: Call Firebase Auth: createUserWithEmailAndPassword(email, password)
      // const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // currentUserId = userCredential.user.uid;

      // TODO: Save salt to firestore: user_meta/{userId} = { email, salt }

      vscode.window.showInformationMessage('Register flow completed (salt created). Integrate Firebase to persist user metadata.');
    }),

    vscode.commands.registerCommand('env.branch.login', async () => {
      const email = await vscode.window.showInputBox({ prompt: 'Email' });
      if (!email) {
        vscode.window.showErrorMessage('Email is required');
        return;
      }
      const password = await vscode.window.showInputBox({ prompt: 'Master Password', password: true });
      if (!password) {
        vscode.window.showErrorMessage('Password is required');
        return;
      }

      // TODO: Sign in with Firebase Auth and obtain uid
      // const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      // const uid = userCredential.user.uid;
      // currentUserId = uid;

      // TODO: fetch salt from firestore user_meta/{uid}
      // const doc = await firestore.collection('user_meta').doc(uid).get();
      // const salt = doc.data()?.salt;

      // For now we ask the user to paste their salt (only for demo)
      const salt = await vscode.window.showInputBox({ prompt: 'Paste your salt (base64) for demo', placeHolder: 'base64 salt' });
      if (!salt) {
        vscode.window.showErrorMessage('Salt is required for demo login');
        return;
      }

      // Derive key in memory
      sessionKey = deriveSessionKey(password, salt);
      vscode.window.setStatusBarMessage('✅ env.branch: Terautentikasi', 5000);
      vscode.window.showInformationMessage('Login demo complete — session key stored in memory only.');
    }),

    vscode.commands.registerCommand('env.branch.saveEnv', async () => {
      if (!sessionKey) {
        vscode.window.showErrorMessage('Session key not found. Please login first.');
        return;
      }

      // For a robust implementation, detect repoIdentifier and branch via Git extension API
      const repoIdentifier = await vscode.window.showInputBox({ prompt: 'Repo Identifier (e.g. github.com/user/repo.git)' });
      if (!repoIdentifier) return;
      const branchName = await vscode.window.showInputBox({ prompt: 'Branch name (e.g. develop)' });
      if (!branchName) return;

      // open a temporary untitled document for user to paste env content
      const doc = await vscode.workspace.openTextDocument({ content: '', language: 'dotenv' });
      await vscode.window.showTextDocument(doc, { preview: false });
      const save = await vscode.window.showInformationMessage('Paste your .env into the untitled document and then click Save', 'Save');
      if (save !== 'Save') return;

      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      const plainEnv = editor.document.getText();

      // encrypt
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv('aes-256-cbc', sessionKey, iv);
      let encrypted = cipher.update(plainEnv, 'utf8', 'base64');
      encrypted += cipher.final('base64');

      // TODO: upload to firestore: environments collection with fields { userId, repoIdentifier, branchName, encryptedEnv, iv }

      vscode.window.showInformationMessage(`ENV encrypted (base64 ${encrypted.length} chars). Implement Firestore upload in code.`);
    }),

    vscode.commands.registerCommand('env.branch.sync', async () => {
      if (!sessionKey) {
        vscode.window.showErrorMessage('Session key not found. Please login first.');
        return;
      }

      const repoIdentifier = await vscode.window.showInputBox({ prompt: 'Repo Identifier to fetch (e.g. github.com/user/repo.git)' });
      if (!repoIdentifier) return;
      const branchName = await vscode.window.showInputBox({ prompt: 'Branch name to fetch (e.g. develop)' });
      if (!branchName) return;

      // TODO: query Firestore for environments where userId == currentUserId and repoIdentifier & branchName match
      // For demo we ask user to paste encryptedEnv and iv
      const encryptedEnv = await vscode.window.showInputBox({ prompt: 'Paste encryptedEnv (base64) for demo' });
      if (!encryptedEnv) return;
      const ivBase64 = await vscode.window.showInputBox({ prompt: 'Paste iv (base64) for demo' });
      if (!ivBase64) return;

      try {
        const iv = Buffer.from(ivBase64, 'base64');
        const decipher = crypto.createDecipheriv('aes-256-cbc', sessionKey, iv);
        let decrypted = decipher.update(encryptedEnv, 'base64', 'utf8');
        decrypted += decipher.final('utf8');

        // write to workspace .env (overwrite) — careful in real product
        const folders = vscode.workspace.workspaceFolders;
        if (!folders || folders.length === 0) {
          vscode.window.showErrorMessage('Open a workspace first');
          return;
        }
        const workspaceRoot = folders[0].uri.fsPath;
        const envPath = path.join(workspaceRoot, '.env');
        fs.writeFileSync(envPath, decrypted, { encoding: 'utf8' });
        vscode.window.showInformationMessage(`✅ .env updated for branch ${branchName}`);
      } catch (err) {
        vscode.window.showErrorMessage('Decryption failed — check session key / data');
      }
    })
  );
}

export function deactivate() {
  // clear session key from memory when deactivated
  if (sessionKey) {
    sessionKey.fill(0);
    sessionKey = null;
  }
  currentUserId = null;
}
