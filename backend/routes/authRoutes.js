const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');
const uploadFile = require('../middleware/uploadMiddleware');
const { uploadFile, getAllFiles } = require('../controllers/uploadController');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Define Routes
router.post("/upload", upload.array("images", 5), serviceController.uploadService);

module.exports = router;
