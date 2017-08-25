var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var mongoose = require('mongoose');
var logger = require("morgan");
mongoose.Promise = Promise;

var router = express.Router();

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

//SERVER LOGIC

//Google passport
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'],
  accessType: 'offline'
}));
app.get('/auth/google/callback', passport.authenticate('google', {

  successRedirect: '/',
  failureRedirect: '/auth/google' 
}));

//API ROUTES
// testing route for the axios get user
app.get('/api/user/:username',(req, res) => {
  console.log(req)
  User.find({username: req.params.username}, (err, foundUser) => {
      if (err) throw err;
      res.json(foundUser);
  })
})


//for this user, get whole user obj
app.get('/api/user',(req, res) => {
  var userToFind = 0;  
  console.log('req session is')
  console.log(req.session)
  if (req.session.passport) userToFind =  req.session.passport.user
  User.findById(userToFind, (err, foundUser) => {
    if (!foundUser) foundUser = {};
    res.json(foundUser)
  })

})

//route for user to create a goal
app.post('/api/goal', (req, res) => {
  //TODO: check with front end to make sure req.body data format is correct
  var goalObj = {
    goalTitle: req.body.goalTitle, 
    goalDue: req.body.goalDue, 
    tasks:req.body.tasks
  };
  User.findOneAndUpdate({_id: req.session.passport.user},{goal: goalObj}, (err, foundUser) => {
    if (err) throw err;
    console.log('goal added to this user');
    res.send('goal inserted');
  })
})


//route for user to check off a task
app.put('/api/:taskTitle', (req, res) => {
  //query MongoDB to update that task of goal of user
  User.findOneAndUpdate({
    _id: req.session.passport.user,
    'goal.tasks.title': body.params.taskTitle
  },{
    $set: {
      "goal.tasks.$.taskComplete": true
    }
  }, (err, foundUser) => {
    if (err) throw err;

    var newGoalObj = {
      goalTitle: '', 
      goalDue: '', 
      tasks:req.body.tasks
    };
    var taskLeftBeforeUpdate = foundUser.goal.tasks.reduce((acc, v) => (v === false ? acc + 1 : acc), 0);
    //if there is only one task left before update
    if (taskLeftBeforeUpdate === 1) {
      //set user goal to blank obj / delete the goal
      User.findOneAndUpdate({_id: req.session.passport.user}, {goal: newGoalObj}, (err, doc) => {
        console.log('whole goal completed')
        res.redirect('/success')
      })
    } else {
      console.log('task checked off')
      res.send('task checked off ')
    }
  })

})

//route for server to respond if user is logged in
app.get("/api/loggedin", (req, res) => {
  console.log('is user logged in?')
  console.log(`answer is ${isLoggedIn(req, res)}`)
  res.json({
    logged: isLoggedIn(req,res)
  })
})

//every other page goes to our index page
app.get('*', function (request, response){
  console.log('showing index page!');
  response.sendFile(__dirname + "/public/index.html");
})

//================================


app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});

//helper function to check if user is logged in
function isLoggedIn(req, res) {
    if (req.isAuthenticated()){
      console.log('----user is logged in----');
      return true;
    } else {
      console.log('----user is not logged in----');
      return false
    }
}