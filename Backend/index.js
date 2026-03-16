require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const testRoute = require("./routes/testRoute");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const wasteValueRoutes = require("./routes/wasteValueRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

/* CORS */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://swadeshi-waste-ai-final.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* PREFLIGHT FIX */
app.options("*", cors());

app.use(express.json({ limit: "20mb" }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

/* ROUTES */
app.use("/api/test", testRoute);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/waste-value", wasteValueRoutes);
app.use("/api/support", contactRoutes);

/* SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});