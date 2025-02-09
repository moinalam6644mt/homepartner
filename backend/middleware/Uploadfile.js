const path = require('path');
const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/temp'); // Folder where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  }
});

// Multer middleware
const upload = multer({ storage: storage }).single('image');

const uploadFile = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload failed", error: err });
    }
    res.status(200).json({ message: "File uploaded successfully", file: req.file });
  });
};

module.exports = uploadFile;
