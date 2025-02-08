const { createUser, findUserByEmail } = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// Register User
const registerUser = (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  findUserByEmail(email, (err, result) => {
    if (result.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    createUser(name, email, phone, password, (err, result) => {
      if (err) return res.status(500).json({ message: 'Database error' });

      res.status(201).json({
        id: result.insertId,
        name,
        email,
        phone,
        token: generateToken(result.insertId),
      });
    });
  });
};

// Login User
const authUser = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      token: generateToken(user.id),
    });
  });
};

module.exports = { registerUser, authUser };
