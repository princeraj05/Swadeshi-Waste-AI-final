// backend/routes/wasteValueRoutes.js
const express = require("express");
const router = express.Router();

const firebaseAuth = require("../middleware/firebaseAuth");
const { generate, getHistory, getDetail } = require("../controllers/wasteValueController");

// Generate (Protected)
router.post("/generate", firebaseAuth, generate);

// Get history by email (Protected)
router.get("/history/:email", firebaseAuth, getHistory);

// Get detail by id (Public)
router.get("/detail/:id", getDetail);

module.exports = router;
