// backend/routes/chatRoutes.js
const express = require("express");
const router = express.Router();

const firebaseAuth = require("../middleware/firebaseAuth");
const { sendMessage, getChats } = require("../controllers/chatController");

// Protected: send message (attach Firebase token)
router.post("/send", firebaseAuth, sendMessage);

// Optional: get chat history (if you want an endpoint)
router.get("/history/:email", firebaseAuth, getChats);

module.exports = router;
