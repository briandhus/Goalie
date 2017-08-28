import axios from 'axios';
// var auth = require('../../../config/auth.js')
// if (process.env.GOOGLE_CLIENT_ID){
var clientID = process.env.GOOGLE_CLIENT_ID;
  // } else {
    // var configAuth = require('../../../config/auth.js');
    // var clientID = configAuth.googleAuth.clientID;
  // }

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

  goToStart: () => {
    return axios.get('/');
  },

  taskPut: (taskTitle) => {
    return axios.put(`/api/${taskTitle}`);
  },

  googCalPush: (name, dueDate, tasks) => {
    var GoogleAuth;
    // load google authentication and api
    gapi.load('client:auth2', initClient);

    function initClient() {
      var scope = 'https://www.googleapis.com/auth/calendar'
      var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
      // sets client scope and checks for user status
      console.log('SCOPE', scope)
      console.log('INIT STARTING')
      gapi.client.init({
        'discoveryDocs': [discoveryUrl],
        'client_id': process.env.GOOGLE_CLIENT_ID,
        'scope': scope
      }).then(()=> {
        console.log('WE GOT HERE')
        GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
        var user = GoogleAuth.currentUser.get();
        setSigninStatus()
      })
    };
    // checks that user is signed in and has authorized use of their calendar, otherwise redirects to an authorization
    function setSigninStatus(isSignedIn) {
      var user = GoogleAuth.currentUser.get()
      var isAuthorized = user.hasGrantedScopes(SCOPE)
      // takes token from authorized user
      // var access_token = user.Zi.access_token
      if (isAuthorized) {
        // createGoal(access_token)
        // createTasks(access_token)
        // Create goal event using google api library
        const goal = {
          'summary': name,
          'start': {
            'date': dueDate
          },
          // endTimeUnspecified throws 403
          'end': {
            'date': dueDate
          },
          // override default reminder notifications
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 12 * 60}
            ]
          }
        };
        // Define parameters and send request to Google Calendar
        const goalRequest = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': goal
        });
        goalRequest.execute((event)=> {
          console.log(event)
        });

        // create task events from array
        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i]
          console.log(task)
          if (task.taskName !== "" || task.taskDate !== ""){
            const taskReminder = {
              'summary': task.taskName,
              'start': {
                'date': task.taskDate
              },
              'end': {
                'date': task.taskDate
              },
              'reminders': {
                'useDefault': false,
                'overrides': [
                  {'method': 'email', 'minutes': 24 * 60},
                  {'method': 'popup', 'minutes': 15 * 60}
                ]
              }
            };
            const taskRequest = gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource' : taskReminder
            });
            taskRequest.execute((event)=>{
              console.log(event)
            });
          }
        }
        // if user is not signed in or has not authorized the use of their calendar, redirect to sign in
      } else {
        GoogleAuth.signIn()
      }
    }
    function updateSigninStatus(isSignedIn) {
      setSigninStatus()
    }
/* oauth authorization version takes token directly from user instance
  not currently in use*/
    // Create overall goal reminder
    /*function createGoal(token) {
      // define new goal date from form
      var goal = {
        'summary': name,
        'start': {
          'date': dueDate
        },
        // endTimeUnspecified throws 403
        'end': {
          'date': dueDate
        },
        // override default reminder notifications
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 12 * 60}
          ]
        }
      }
      // open new request to Google Calendar API and pass user goal
      var xhr = new XMLHttpRequest();
      xhr.open('POST', `https://www.googleapis.com/calendar/v3/calendars/primary/events`);
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      xhr.onreadystatechange = function(e) {
        console.log(xhr.response)
      };
      xhr.send(JSON.stringify(goal));
    }
    // Create task reminders
    function createTasks(token) {
      tasks.forEach((task)=> {
        const taskReminder = {
          'summary': task.taskName,
          'start': {
            'date': task.taskDate
          },
          'end': {
            'date': task.taskDate
          },
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 12 * 60}
            ]
          }
        }
        // open request to Google Calendar API for tasks
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://www.googleapis.com/calendar/v3/calendars/primary/events`);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.onreadystatechange = function(e) {
          console.log(xhr.response)
        }
        xhr.send(JSON.stringify(taskReminder))
      })
    }*/
  }
}

export default helper;