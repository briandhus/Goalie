var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth.js');
var User = require('../models/User.js');

var passport = function(passport) {
	passport.serializeUser(function(user, done){
    console.log('serializeUser is being called!')
    // console.log('user obj is')
    // console.log(user)
    done(null, user.id);
	});

  passport.deserializeUser(function(id, done){
    console.log('deserializeUser is being called!')
    User.findById(id, function(err, user){
			done(null, user);
		});
	});
	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
    },
	  function(accessToken, refreshToken, profile, done) {
      process.nextTick(function(){
        console.log('trying to find user')
        // console.log(`profile displayname is ${profile.displayName}`)
        console.log(`refresh token is ${refreshToken}`)
        console.log(`access token is ${accessToken}`)
        User.findOne({'username': profile.displayName}, function(err, user){
          if(user){
            console.log('user found!')
            // console.log(user);
            user.accessToken = accessToken;
            user.save()

            return done(null, user);
          }
          else {
            console.log('creating a new user');
            User.create({
              'username' : profile.displayName,
              'refreshToken' : refreshToken,
              'accessToken' : accessToken
            }, function(data){
              console.log('done creating a new user')
              console.log(data);
              return done(null, data);
            })  
          }      
        })
      })
    }
	));

};


module.exports = passport; 