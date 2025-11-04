# Security & Architecture (Zero-Knowledge)

This file contains the schema, security rules, and flowcharts used by the extension. Copy the Firestore rules below into your Firebase console and implement the Firestore writes/reads from the extension (serverless/client) while following the flow.

## Firestore schema

Collection `user_meta` (docId = uid):
```json
{
  "email": "user@example.com",
  "salt": "base64-salt-string-unik-per-user"
}
```

Collection `environments` (auto docId):
```json
{
  "userId": "uid-user-yang-memiliki-data-ini",
  "repoIdentifier": "github.com/user/proyek-A.git",
  "branchName": "develop",
  "encryptedEnv": "base64-data-terenkripsi-aes-256",
  "iv": "base64-initialization-vector"
}
```

## Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /user_meta/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /environments/{docId} {
      allow read, update, delete: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

## Flowcharts
See original assignment for registration, login, encrypt/save, and branch-change sync flows.

---
Please review carefully before integrating with Firebase. The extension source includes TODO markers where Firestore and Auth calls belong.
