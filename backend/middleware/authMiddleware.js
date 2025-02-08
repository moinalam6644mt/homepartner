const jwt = require('jsonwebtoken');
const db = require('../config/db');

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    token = token.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized, token failed' });

      db.query(`SELECT * FROM users WHERE id = ?`, [decoded.id], (err, result) => {
        if (err || result.length === 0) {
          return res.status(401).json({ message: 'User not found' });
        }
        req.user = result[0];
        next();
      });
    });
  } else {
    res.status(401).json({ message: 'Unauthorized, no token' });
  }
};

module.exports = protect;
