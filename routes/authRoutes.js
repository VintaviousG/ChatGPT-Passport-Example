// routes/authruoputes

const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('login', authController / authController.loginUser);
router.get('/logout', authController.logoutUser);
router.get('/user', authController.getCurrentUser);

module.exports = router;