# Env Branch — VS Code Extension (scaffold)

This folder contains a minimal VS Code Extension scaffold implementing commands for a Zero-Knowledge `.env` sync flow as described in the assignment.

Commands registered (skeleton):
- `env.branch.register` — register a new user (creates salt locally, placeholder to call Firebase Auth)
- `env.branch.login` — login and derive session key (PBKDF2) stored in memory only
- `env.branch.saveEnv` — encrypt a pasted ENV with session key and (placeholder) upload to Firestore
- `env.branch.sync` — manual sync: fetch encrypted ENV, decrypt with session key, and write to workspace `.env`

This scaffold intentionally does NOT include a Firebase SDK integration. See `README_SECURITY.md` for the Firestore schema, rules, and security notes. The code in `src/extension.ts` includes clear TODO markers where Firebase calls should be added.

How to build locally:

1. cd extensions/env-branch
2. npm install
3. npm run compile
4. Run the extension in the Extension Development Host from VS Code (F5)

Notes: the extension demonstrates crypto usage (random salt, pbkdf2, AES-256-CBC) and keeps the session key only in memory. Do not persist the session key.
