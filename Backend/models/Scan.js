
// backend/models/Scan.js
const mongoose = require("mongoose");

const ScanSchema = new mongoose.Schema({
  email: { type: String, required: true },
  wasteItem: String,
  analysis: Object,
  image: String, // saved path
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Scan", ScanSchema);


