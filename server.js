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

// Database configuration with mongoose and model requires
var User = require('./models/User.js');
var Goal = require('./models/Goal.js');
var Gear = require('./models/Gear.js');
//database logic 
if (process.env.MONGODB_URI || process.env.NODE_ENV === 'production') mongoose.connect(process.env.MONGODB_URI);
else mongoose.connect("mongodb://localhost/goalsDB");
var db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//server logic
// TODO: fix HTML routes

//Google passport 
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'],
  accessType: 'offline'
}));
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
  res.sendFile(__dirname + '/public/index2.html');
})
//every other page goes to our index page
app.get('*', isLoggedIn, function (request, response){
  console.log('showing index page!');
  response.sendFile(__dirname + "/public/index2.html");
})

//API routes

//for this user, get his/her goal
app.get('/api/goal',(req, res) => {
  console.log('/api/goal here!');
  console.log(req);
  res.json(res);
  //TODO: fix id ... listen to Roper 
  // User.findById({_id: 1}, (err1, foundUser) => {
  //   Goal.find({_id: foundUser.goal}, (err2, foundGoal) => {
  //      res.json(foundGoal);
  //   })
  // })
})

app.post('/api/goal', (req, res) => {
  //TODO .. insert data via req.body
  var goalObj = {goalTitle: '', goalDate: '', subtask:[]}
  Goal.findOneAndUpdate(goalObj, goalObj, {upsert: true}, (err1, foundGoal) => {
    //TODO: fix id
      console.log('done inserting into goal collection');
    User.findOneAndUpdate({_id: 1},{goal: foundGoal._id}, (err2, foundUser) => {
      console.log('goal added to this user');
      res.send('goal inserted');
    })
  })
})

app.put('/api/goal/:goalTitle/:taskTitle', (req, res) => {
  //query MongoDB to update that task of this goal
  Goal.findOneAndUpdate({
    goalTitle: body.params.goalTitle,
    'subtask.title': body.params.taskTitle
  }, {
    $set:{
      "subtask.$.completed": true
    }
  }, (err, foundGoal)=> {
    //check if foundGoal's tasks are all completed
    var allTaskCompleted = foundGoal.subtask.reduce((acc, v) => (acc && v.completed));
    if (allTaskCompleted) {
      Goal.findOneAndRemove({})
    }
      //if yes, then do Goal.delete
  })
  //if foundGoal's tasks are all completed
    //delete that goal 
      //using cascade, it would that goal_ID from the user as well 
        //redirect to success


})

// TODO: Change above routes to have api before them???
// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//================================

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
    res.redirect('/')
}