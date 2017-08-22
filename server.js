var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var mongoose = require('mongoose');
var logger = require("morgan");
mongoose.Promise = Promise;

//express server
var app = express();
var port = process.env.PORT || 3000;

//server middle-wares
app.use(logger("dev"));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

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

// Database configuration with mongoose and model requires
var User = require('./models/User.js');
var Goal = require('./models/Goal.js');
var Gear = require('./models/Gear.js');

mongoose.connect('mongodb://localhost/goalsDB');
//swap out the above line when deployed
var db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//server logic
// TODO: below path unnecessary, comment out
app.get('/', function(req, res){
    res.redirect('/auth/google');
})

app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

//after login, redirect 
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/index',
  failureRedirect: '/auth/google' 
}));

// TODO: change below to go to dashboard
app.get('/index', function(req, res){
  console.log('getting index page!')
  console.log('req.session is')
  console.log(req.session)
  res.sendFile(__dirname + '/public/index2.html')
})

app.listen(port, function() {
  console.log(`Server is running on port ${port}`)
});
