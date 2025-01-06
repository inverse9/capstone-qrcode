const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const db = require("../db.js");
const config = require("../config.js");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = results[0];
    if (user.password !== md5(password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, config.secret, {
      expiresIn: "1h",
    });
    res.json({
      id: user.id,
      email: user.email,
      token: token,
    });
  });
});

module.exports = router;
