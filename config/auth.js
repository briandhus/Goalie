var URL = "";
if (process.env.PORT) URL = 'https://goalie-teamgb.herokuapp.com/auth/google/callback';
else URL = "http://localhost:3000/auth/google/callback"

module.exports = {
	'googleAuth' : {
		'clientID': '509748148886-5k77g672t7sv8hdimr9ri23qv0ij8fa2.apps.googleusercontent.com',
		'clientSecret': 'N2KVevY8bGw-OxvA5G4DSeBc',
		'callbackURL': URL
	}
}