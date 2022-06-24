const express = require("express");

const authController = require("../controllers/auth");
const router = express.Router();
const isLogged = require("../middlewares/authorization").userLoggedIn;

// /api/auth/register
router.post('/register', authController.registerUser)

router.post('/logout', authController.logoutUser)

router.post('/login', authController.loginUser)

router.get('/user/me', isLogged, authController.getUserId)

module.exports = router;