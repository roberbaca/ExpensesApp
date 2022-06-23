const express = require("express");

const authController = require("../controllers/auth");
const router = express.Router();

// /api/auth/register
router.post('/register', authController.registerUser)

router.post('/logout', authController.logoutUser)

router.post('/login', authController.loginUser)

module.exports = router;