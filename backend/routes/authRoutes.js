const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');
const uploadFile = require('../middleware/Uploadfile');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/upload', uploadFile);

module.exports = router;
