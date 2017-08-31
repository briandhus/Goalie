import axios from 'axios';

const helper = {
  // This function hits our own server to update the goal and tasks initially
  createGoal: (goal) => {
    // console.log('helper creating a goal');
    // console.log('goal', goal);
    return axios.post('/api/goal', goal)
  },

  completeGoal: (goalTitle) => {
     // console.log(`helper completing goal ${goalTitle}`)
    return axios.put(`/api/goal/${goalTitle}`)
  } ,
  // This function hits our own server to update the tasks under goals/tasks
  createTasks: (tasks) => {
    // console.log('helper creating tasks');
    // console.log('created tasks ', tasks);
    return axios.post('/api/tasks', tasks)
  },

  taskPut: (task) => {
    // console.log('helper updating task')
    return axios.put(`/api/${task.taskTitle}`);
  },

  googInit: ()=>{
    console.log('initializing')
    var scope = 'https://www.googleapis.com/auth/calendar'
    var GoogleAuth;

    // load google authentication and api
    gapi.load('client:auth2', initClient);

    function initClient() {
      console.log('inside init')
      // sets client scope and checks for user status
      axios.get('/api/clientId').then((response)=>{
        // console.log(response)
        console.log('recoverd client ID')
        var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
        var s = response.data;
        var customInitConfig = {
                          'discoveryDocs': [discoveryUrl],
                          'clientId': [s],
                          'scope': 'https://www.googleapis.com/auth/calendar'
                        };
        // console.log('initConfig', customInitConfig);
        gapi.client.init(customInitConfig).then(()=> {
          console.log('setting custom init config');
          GoogleAuth = gapi.auth2.getAuthInstance();
          GoogleAuth.isSignedIn.listen(updateSigninStatus);
          var user = GoogleAuth.currentUser.get();
          setSigninStatus();
        });
      });
      function updateSigninStatus(isSignedIn) {
        setSigninStatus()
      }
      // checks that user is signed in and has authorized use of their calendar, otherwise redirects to an authorization
      function setSigninStatus(isSignedIn) {
        console.log('checking sign in')
        var user = GoogleAuth.currentUser.get()
        var isAuthorized = user.hasGrantedScopes(scope)
        if (isAuthorized) {
          console.log('user is authorized')
          // if user is not signed in or has not authorized the use of their calendar, redirect to sign in
        } else {
          console.log('sign in please')
          GoogleAuth.signIn()
        }
      }

    };
  },

  googCalPush: (name, dueDate, tasks) => {
    console.log('running calendar push')
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
          {'method': 'popup', 'minutes': 15 * 60}
        ]
      }
    };
    // Define parameters and send request to Google Calendar
    const goalRequest = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': goal
    });
    goalRequest.execute((event)=> {
      console.log('creating goal')
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
          console.log('creating task')
          console.log(event)
        });
      }
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
