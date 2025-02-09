const multer = require('multer');
const path = require('path');

// Configure Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder to store images
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

// Multer Upload Middleware
const upload = multer({ storage: storage });

module.exports = upload;
