// controller or logic for auth routes
// controllers/authController.js

const passport = require('passport');
const User = require('../models/user');

exports.registerUser = (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ error: 'Registration failed' });
    }
    passport.authenticate('local')(req, res, () => {
      res.json({ success: true });
    });
  });
};

exports.loginUser = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
});

exports.logoutUser = (req, res) => {
  req.logout();
  res.json({ success: true });
};

exports.getCurrentUser = (req, res) => {
  res.json({ user: req.user });
};
