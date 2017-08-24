var URL = "";
if (process.env.PORT) URL = "https://goalie-teamgb.herokuapp.com/auth/google/callback";
else URL = "http://localhost:3000/auth/google/callback"

module.exports = {
    'googleAuth' : {
        'clientID': '29299123883-9sv8n5o76q9q6dshegaeqcrr4aliuncu.apps.googleusercontent.com',
        'clientSecret': 'auq9CdAv8eoi5rkGtTlBkX9T',
        'callbackURL': 'URL'
    }
}