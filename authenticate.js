const passport = require('passport')
const LocalStratregy = require('passport-local').Strategy
const User = require('./models/user')

exports.local = passport.use(new LocalStratregy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
