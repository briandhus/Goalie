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
    var GoogleAuth
    var SCOPE = 'https://www.googleapis.com/auth/calendar'
    createGoal()
    gapi.load('client:auth2', initClient)
    function initClient() {
      var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
      
      gapi.client.init({
        'discoveryDocs': [discoveryUrl],
        'clientId': auth.googleAuth.clientID || process.env.GOOGLE_CLIENT_ID,
        'scope': SCOPE
      }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
        var user = GoogleAuth.currentUser.get();
        setSigninStatus()
      })
    };

    function setSigninStatus(isSignedIn) {
      var user = GoogleAuth.currentUser.get()
      console.log(user)
      var isAuthorized = user.hasGrantedScopes(SCOPE)
      console.log(isAuthorized)
      // setSigninStatus()
      if (isAuthorized) {
        axios.get('/api/user').then((res)=>{
          console.log(res)
          var access_token = res.data.accessToken
          createGoal(access_token)
        })
    //     console.log(`Goal: ${name}`)
    //     console.log(`Tasks: ${tasks}`)
    //     console.log(`pushing to google calendar`)
    //     // define goal deadline as a calendar event
    //     const event = {
    //       'summary': name,
    //       'start': {
    //         'date': dueDate
    //       },
    //       'endTimeUnspecified': true,
    //       'reminders': {
    //         'useDefault': false,
    //         'overrides': [
    //           {'method': 'email', 'minutes': 24 * 60},
    //           {'method': 'popup', 'minutes': 12 * 60}
    //         ]
    //       }
    //     };
    //     const goalRequest = gapi.client.calendar.events.insert({
    //       'calendarId': 'primary',
    //       'resource': event
    //     })
    //     goalRequest.execute((event) => {
    //       console.log(event)
    //     });
    //     // create calendar events for tasks
    //     for (var i = 0; i < tasks.length; i++) {
    //       const task = {
    //         'summary': tasks[i].taskName,
    //         'start': {
    //           'date': tasks[i].taskDate
    //         },
    //         'endTimeUnspecified': true,
    //         'reminders': {
    //           'useDefault': false,
    //           'overrides': [
    //             {'method': 'email', 'minutes': 24 * 60},
    //             {'method': 'popup', 'minutes': 12 * 60}
    //           ]
    //         }
    //       }
    //       const taskRequest = gapi.client.calendar.events.insert({
    //         'calendarId': 'primary',
    //         'resource': event
    //       });
    //       taskRequest.execute((task) => {
    //         // console.log('Task created')
    //       })
    //     };
      } else {
        GoogleAuth.signIn()
      }
    }

    function updateSigninStatus(isSignedIn) {
      setSigninStatus()
    }
// oauth authorization version
    // axios.get('/api/user').then((res)=>{
    //   console.log(res.data)
    //   var access_token = res.data.accessToken
    //   createGoal(access_token)
    // })

    function createGoal(token) {
      // console.log(token)
      var events = {
        'summary': 'test',
        'start': {
          'date': '2017-08-29'
        },
        'end': {
          'date': '2017-08-29'
        }
      }
      var xhr = new XMLHttpRequest();
      xhr.open('POST', `https://www.googleapis.com/calendar/v3/calendars/primary/events`);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      xhr.onreadystatechange = function(e) {
        console.log(xhr.response)
      };
      xhr.send(null);
    //   xhr.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/primary/events');
    //   xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    //   xhr.onreadystatechange = function (e) {
    //     console.log(xhr.response)
    //   }
    //   xhr.send(null)
    }

  }
}

export default helper;