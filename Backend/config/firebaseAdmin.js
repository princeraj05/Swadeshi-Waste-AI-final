// backend/config/firebaseAdmin.js
const admin = require("firebase-admin");
const path = require("path");

const serviceAccountPath = path.join(__dirname, "..", "firebaseServiceAccount.json");
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
