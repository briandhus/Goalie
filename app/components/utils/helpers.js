import axios from 'axios';

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

  googCalPush: (goal, date) => {
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
    const tasks = goal.task
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

export default helper;
