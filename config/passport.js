// config/passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Use local strategy with passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));

// Serialize user for session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



