const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createUserTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  db.query(sql, (err, result) => {
    if (err) console.error('Error creating users table:', err);
  });
};

// Function to create a new user
const createUser = async (name, email, phone, password, callback) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)`;
  db.query(sql, [name, email, phone, hashedPassword], callback);
};

// Function to find a user by email
const findUserByEmail = (email, callback) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  db.query(sql, [email], callback);
};

createUserTable();

module.exports = { createUser, findUserByEmail };
