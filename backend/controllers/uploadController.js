const db = require('../config/db');

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filename = req.file.filename;
  const filepath = `/uploads/${filename}`;

  // Insert into MySQL
  const sql = "INSERT INTO file_uploads (filename, filepath) VALUES (?, ?)";
  db.query(sql, [filename, filepath], (error, result) => {
    if (error) {
      return res.status(500).json({ message: "Database insert failed", error });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      filePath: filepath
    });
  });
};

// Retrieve all uploaded files
const getAllFiles = (req, res) => {
  const sql = "SELECT * FROM file_uploads ORDER BY uploaded_at DESC";
  db.query(sql, (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Database query failed", error });
    }
    res.status(200).json(results);
  });
};

module.exports = { uploadFile, getAllFiles };
