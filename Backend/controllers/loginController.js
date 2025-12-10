const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "User not found. Please create an account first." });

    // verify password
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ error: "Incorrect password" });

    // create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ SECURE COOKIE FOR NETLIFY + RENDER
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,        // REQUIRED for production HTTPS
      sameSite: "none",    // REQUIRED for cross-domain
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      success: true,
      message: "Login successful!",
      user,
    });

  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
};
