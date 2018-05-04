const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done)  =>{
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      console.log(accessToken);
    }
  ));
  