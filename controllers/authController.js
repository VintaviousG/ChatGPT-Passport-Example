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
        res.json({
            success: true,
    
        });
        console.log(req.body.username)
    });
  });
  
};
// What to do if the user is logged in
exports.loginUser = passport.authenticate('local', {
    // I think this goes back to a route if succeful or failed
    successRedirect: '/auth/user',
    //If failed go back to the login page
    failureRedirect: '/',
  
});

exports.logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err)
      return;
    }
  });
  //go to 2500/ 
  res.redirect('/');
  console.log(`Logout Successful`);
  
  
};

exports.getCurrentUser = (req, res) => {
  res.json({ user: req.user });
};
