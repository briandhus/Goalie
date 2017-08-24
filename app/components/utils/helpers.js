import axios from 'axios';
// var fs = require('fs');
// var google = require('googleapis');
// var auth = require('../../../config/auth.js');

const helper = {
  // This function hits our own server to update the tasks under goals/user
  // TODO: Decide if put or post (update user or post to goal or user) 
  createGoal: (goal) => {
    console.log('helper creating a goal');
    console.log('goal', goal);
    return axios.put('/api/goal')
  },

  // This function hits our own server to update the tasks under goals/tasks
  // TODO: Decide if put or post (update user or post to goal or tasks)
  createTask: (task) => {
    console.log('helper creating a task');
    console.log('created task - ', task);
    return axios.put('/api/task')
  },

  // This function hits our own server to retrieve the record of user
  getUser: () => {
    console.log('helper makes get call for User info');
    return axios.get('/api/user');
  },

  googCalGoalPush: (goal, date) => {
    console.log(`pushing to google calendar`)
    // define goal deadline as a calendar event
    var event = {
      'summary': goal,
      'start': {
        'date': date
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
    const request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    })
    // 
  }
};

export default helper;
