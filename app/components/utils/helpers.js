import axios from 'axios';

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
  }
};

export default helper;
