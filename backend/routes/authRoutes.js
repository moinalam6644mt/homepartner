const express = require("express");
const { register, login, getProfile, authenticate } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, getProfile);

module.exports = router;
