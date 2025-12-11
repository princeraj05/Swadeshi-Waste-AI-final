const express = require("express");
const router = express.Router();
const firebaseAuth = require("../middleware/firebaseAuth");
const { sendContactMessage } = require("../controllers/contactController");

// Only logged-in users can send messages
router.post("/contact", firebaseAuth, sendContactMessage);

module.exports = router;
