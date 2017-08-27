import axios from 'axios';
var auth = require('../../../config/auth.js')

const helper = {
  // This function hits our own server to update the goal and tasks initially 
  createGoal: (goal) => {
    console.log('helper creating a goal');
    console.log('goal', goal);
    return axios.post('/api/goal', goal)
  },

  // This function hits our own server to update the tasks under goals/tasks
  // TODO: Decide if put or post (update user or post to goal or tasks)
  createTask: (task) => {
    console.log('helper creating a task');
    console.log('created task - ', task);
    return axios.put('/api/task')
  },

  // This function hits our own server to retrieve the record of user
  // getUser: (username) => {
  //   console.log('AXIOS get')
  //   // console.log(username)
  //   return axios.get('/api/user/' + username);
  // },

  googCalPush: (name, dueDate, tasks) => {
    // console.log(auth.googleAuth.clientID)
    var GoogleAuth

    gapi.load('client:auth2', initClient)


  function calAPI() {
    var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
    if (params && params['access_token']) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST',
          'https://www.googleapis.com/drive/v3/about?fields=user&' +
          'access_token=' + params['access_token']);
      xhr.onreadystatechange = function (e) {
        console.log(xhr.response);
      };
      xhr.send(null)
    console.log(`Goal: ${goal}`)
    console.log(`Tasks: ${tasks}`)
    console.log(`pushing to google calendar`)
    // define goal deadline as a calendar event
    const event = {
      'summary': goal.goalName,
      'start': {
        'date': goal.goalDate
      },
      'endTimeUnspecified': true,
      'reminders': {
        'useDefault': false, 
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 12 * 60}
        ]
      }
    };
    // insert event to primary calendar
    const goalRequest = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });
    goalRequest.execute((event) => {
      console.log('Event created')
    })
    // create calendar events for tasks
    // const tasks = goal.task
    for (var i = 0; i < tasks.length; i++) {
      const task = {
        'summary': tasks[i].taskName,
        'start': {
          'date': tasks[i].taskDate
        },
        'endTimeUnspecified': true,
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 12 * 60}
          ]
        }
      }
      const taskRequest = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
      });
      taskRequest.execute((task) => {
        console.log('Task created')
      })
    }
  }
};

    function initClient() {
      var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
      var SCOPE = 'https://www.googleapis.com/auth/calendar'
      gapi.client.init({
        'discoveryDocs': [discoveryUrl],
        'clientId': auth.googleAuth.clientID || process.env.GOOGLE_CLIENT_ID,
        'scope': SCOPE
      }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.isSignedIn
        var user = GoogleAuth.currentUser.get();
        con
        // var isAuthorized = user.hasGrantedScopes(SCOPsole.log(username)E);
        console.log(`Goal: ${name}`)
        console.log(`Tasks: ${tasks}`)
        console.log(`pushing to google calendar`)
        // define goal deadline as a calendar event
        const event = {
          'summary': name,
          'start': {
            'date': dueDate
          },
          'endTimeUnspecified': true,
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 12 * 60}
            ]
          }
        };
        const goalRequest = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        });
        goalRequest.execute((event) => {
          // console.log('Event created')
        });
        // create calendar events for tasks
        for (var i = 0; i < tasks.length; i++) {
          const task = {
            'summary': tasks[i].taskName,
            'start': {
              'date': tasks[i].taskDate
            },
            'endTimeUnspecified': true,
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 12 * 60}
              ]
            }
          }
          const taskRequest = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
          taskRequest.execute((task) => {
            // console.log('Task created')
          })
        };
      })
    };
  }
}

export default helper;