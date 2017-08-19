var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var configAuth = require('./auth');


var passport = function(passport) {
	passport.serializeUser(function(user, done){
		console.log('serializeUser is being called!')
    done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
    console.log('deserializeUser is being called!')
    var user = {name: 'Chi Lu', id: 1};
	  done(null, user);
	});

	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
      console.log('atempting to be authenticated');
      process.nextTick(function(){
        console.log('trying to find user')
        var user = {name: 'Chi Lu', id: 1}
        return done(null, user);
      })
    }
	));

};


module.exports = passport; 