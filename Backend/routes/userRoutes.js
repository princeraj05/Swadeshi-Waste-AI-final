// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const firebaseAuth = require("../middleware/firebaseAuth");
const { createUser, getUserDetails } = require("../controllers/userController");

// Create or return existing user (protected)
router.post("/create", firebaseAuth, createUser);

// Get user's Mongo details (protected)
router.get("/details", firebaseAuth, getUserDetails);

// Optionally keep /me to return decoded firebase token
router.get("/me", firebaseAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
