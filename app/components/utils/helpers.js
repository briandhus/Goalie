import axios from 'axios';
import auth from '../../../../config/auth.js'

const helper = {
  // This function hits our own server to update the goal and tasks initially 
  createGoal: (goal) => {
    console.log('helper creating a goal');
    console.log('goal', goal);
    return axios.post('/api/goal')
  },

  // This function hits our own server to update the tasks under goals/tasks
  // TODO: Decide if put or post (update user or post to goal or tasks)
  createTask: (task) => {
    console.log('helper creating a task');
    console.log('created task - ', task);
    return axios.put('/api/task')
  },

  // This function hits our own server to retrieve the record of user
  getUser: (username) => {
    console.log('AXIOS get')
    // console.log(username)
    return axios.get('/api/user/' + username);
  },

  googCalPush: (goal, tasks) => {
    var YOUR_CLIENT_ID = auth.clientID || process.env.GOOGLE_CLIENT_ID;
    var YOUR_REDIRECT_URI = 'https://goalie-teamgb.herokuapp.com/auth/google/callback' || 'http://localhost:3000/auth/google/callback';
    var queryString = location.hash.substring(1);

    // Parse query string to see if page request is coming from OAuth 2.0 server.
    var params = {};
    var regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      // Try to exchange the param values for an access token.
      exchangeOAuth2Token(params);
    }

  // function calAPI() {
  //   var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
  //   if (params && params['access_token']) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open('POST',
  //         'https://www.googleapis.com/drive/v3/about?fields=user&' +
  //         'access_token=' + params['access_token']);
  //     xhr.onreadystatechange = function (e) {
  //       console.log(xhr.response);
  //     };
  //     xhr.send(null
  //   console.log(`Goal: ${goal}`)
  //   console.log(`Tasks: ${tasks}`)
  //   console.log(`pushing to google calendar`)
  //   // define goal deadline as a calendar event
  //   const event = {
  //     'summary': goal.goalName,
  //     'start': {
  //       'date': goal.goalDate
  //     },
  //     'endTimeUnspecified': true,
  //     'reminders': {
  //       'useDefault': false, 
  //       'overrides': [
  //         {'method': 'email', 'minutes': 24 * 60},
  //         {'method': 'popup', 'minutes': 12 * 60}
  //       ]
  //     }
  //   };
  //   // insert event to primary calendar
  //   const goalRequest = gapi.client.calendar.events.insert({
  //     'calendarId': 'primary',
  //     'resource': event
  //   });
  //   goalRequest.execute((event) => {
  //     console.log('Event created')
  //   })
  //   // create calendar events for tasks
  //   // const tasks = goal.task
  //   for (var i = 0; i < tasks.length; i++) {
  //     const task = {
  //       'summary': tasks[i].taskName,
  //       'start': {
  //         'date': tasks[i].taskDate
  //       },
  //       'endTimeUnspecified': true,
  //       'reminders': {
  //         'useDefault': false,
  //         'overrides': [
  //           {'method': 'email', 'minutes': 24 * 60},
  //           {'method': 'popup', 'minutes': 12 * 60}
  //         ]
  //       }
  //     }
  //     const taskRequest = gapi.client.calendar.events.insert({
  //       'calendarId': 'primary',
  //       'resource': event
  //     });
  //     taskRequest.execute((task) => {
  //       console.log('Task created')
  //     })
  //   }
  // }
};

export default helper;
