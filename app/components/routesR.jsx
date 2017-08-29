import React from 'react';

import { Route, BrowserRouter, Switch } from "react-router-dom";
import helpers from './utils/helpers';
import LoginOrStart from './children/LoginOrStart.jsx';
import About from './children/About.jsx';
import Form from './children/form.jsx';
import Dashboard from './children/Dashboard.jsx';
import Success from './children/Success.jsx';


class Routes extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      userLogged: false,
      serverResponded: false,
      username: 'George',
      goal: {},
      tasks:[],
      gearLevel: 0,
      goalComplete: false,
      goToSuccess:  false
    }
    this.updateLogin = this.updateLogin.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.createGoal = this.createGoal.bind(this);
  }

  updateLogin(logincheck){
    var that = this;
    that.setState({
      serverResponded: true,
      userLogged: logincheck.data.logged,
    })
    console.log('updated routesR\'s login states')
  }

  updateUser(foundUser){
    var that = this;
    that.setState({
      username: foundUser.username,
      goal: foundUser.goal,
      tasks:foundUser.tasks,
      gearLevel:foundUser.gearLevel
    })
    console.log('updated routesR\'s user & goal states');
    console.log('foundUser', foundUser.username)
  }

  createGoal(newGoal, newTasks){
    this.setState({
      goal: newGoal,
      tasks: newTasks.tasks,
      goToSuccess: false
    })
  }

  updateTask(task){
    var that = this;
    var oldTasks = this.state.tasks;
    // console.log('oldTasks before mapping is')
    // console.log(oldTasks)
    oldTasks.map((v) => {
      if (v.taskTitle === task.taskTitle) {
        v.taskComplete = true; 
      }
      return v;
    })
    helpers.taskPut(task).then((response)=>{
      console.log('put /api/task returns data')
      console.log(response.data)
      if (response.data.goalComplete){
        that.setState({
          goal: {},
          tasks: [],
          gearLevel: 0,
          goToSuccess: true
        })
        console.log('trying to go to success page')
      } else {
        that.setState({
          tasks: oldTasks,
          gearLevel: that.state.gearLevel + 1
        })
      console.log(`${task.taskTitle} status updated`);
      }
    })
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/"  render={(props) => (
            <LoginOrStart 
              updateLogin={this.updateLogin}
              updateUser={this.updateUser}
              userLogged = {this.state.userLogged}
              serverResponded = {this.state.serverResponded}
            />
          )}/>
          <Route path="/about" component={About}/>   

          <Route exact path="/form" render={(props) => (
            <Form 
              createGoal={this.createGoal}
            />
          )}/>      

          <Route path="/dashboard" render={(props) => (
            <Dashboard
              username={this.state.username}
              goal={this.state.goal}
              tasks={this.state.tasks}
              updateTask={this.updateTask}
              gearLevel = {this.state.gearLevel}
              sendData={this.getData}
              goToSuccess={this.state.goToSuccess}
            />
          )}/>

        </Switch>
      </div>
    )
  }

}


export default Routes;
