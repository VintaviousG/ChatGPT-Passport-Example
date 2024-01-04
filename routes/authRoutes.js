// routes/authruoputes

const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login',authController.loginUser);
router.get('/logout', authController.logoutUser);
router.get('/user', authController.getCurrentUser);


router.get('/successLogin', (req, res) => {
res.send("User Logged In ")
})

module.exports = router;