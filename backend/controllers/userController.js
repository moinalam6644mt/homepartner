const db = require('../config/db'); // ✅ Import the MySQL connection
const { findUserByEmail } = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    console.log("Received Data:", req.body); // ✅ Log request body

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserQuery, [email], async (err, result) => {
      if (err) {
        console.error("Database Error (Checking User):", err); // ✅ Log database error
        return res.status(500).json({ message: "Database error", error: err });
      }

      if (result.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      console.log("User does not exist. Proceeding with registration."); // ✅ Debugging log

      // Hash password
      const saltRounds = 10;
      try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Password Hashed Successfully"); // ✅ Log hashing success

        // Insert user into MySQL
        const insertQuery = "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)";
        db.query(insertQuery, [name, email, phone, hashedPassword], (err, result) => {
          if (err) {
            console.error("Database Error (Inserting User):", err); // ✅ Log database error
            return res.status(500).json({ message: "Database error", error: err });
          }

          res.status(201).json({ message: "User registered successfully" });
        });

      } catch (hashError) {
        console.error("Hashing Error:", hashError); // ✅ Log hashing error
        res.status(500).json({ message: "Password hashing error", error: hashError });
      }
    });

  } catch (error) {
    console.error("Unexpected Server Error:", error); // ✅ Log unexpected error
    res.status(500).json({ message: "Server error", error });
  }
};


// Login User
const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user by email
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserQuery, [email], async (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });

      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const user = result[0];

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Return user details with token
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        token: generateToken(user.id),
      });
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { registerUser, authUser };
