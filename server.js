var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
var mongoose = require("mongoose");
//express server
var app = express();
var port = process.env.PORT || 3000;

//server middle-wares
app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//passport logic
require('./config/passport.js')(passport);

app.use(cookieParser('S3CR37'))
app.use(cookieSession({
  secret: 'S3CR37',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//database logic 
if (process.env.MONGODB_URI || process.env.NODE_ENV === 'production') mongoose.connect(process.env.MONGODB_URI);
else mongoose.connect("mongodb://localhost/goalieDB");
var db = mongoose.connection;


//[SERVER LOGIC]

//go to Google login
app.get('/login', function(req, res){
    res.redirect('/auth/google');
})
//Google passport 
app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
//after login, redirect 
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/dashboard',
  failureRedirect: '/auth/google' 
}));
//redirected to dashboard page
app.get('/dashboard', function(req, res){
  console.log('showing dashboard page!');
  console.log('req.session is');
  console.log(req.session);
  res.sendFile(__dirname + '/public/dashboard.html');
})
//every other page goes to our index page
app.get('*', isLoggedIn, function (request, response){
  console.log('showing index page!');
  response.sendFile(__dirname + "/public/dashboard.html");
})

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});

//helper function to check if user is logged in
function isLoggedIn(req, res, next) {
    console.log('getting a GET request to show profile page!');
    if (req.isAuthenticated()){
      console.log('----user is logged in----');
      return next();
    }
    console.log('----user is not logged in----');
    res.sendFile(__dirname + "/public/index.html");
}