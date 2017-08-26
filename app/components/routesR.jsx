import React from 'react';

import { Route, BrowserRouter, Switch } from "react-router-dom";

import LoginOrStart from './children/LoginOrStart.jsx';
import About from './children/About.jsx';
import Form from './children/form.jsx';
import Dashboard from './children/Dashboard.jsx';


class Routes extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      userLogged: false
    }
    this.updateLogin = this.updateLogin.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.createGoal = this.createGoal.bind(this);
  }

  componentDidUpdate(){
    //TODO:
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
      goal: foundUser.goal
    })
    console.log('updated routesR\'s user & goal states')
  }

  createGoal(newGoal){
    this.setState({
      goal: newGoal
    })
  }



  updateTask(){
    //TODO
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
              <Form {...props}
              />
            )}/>      

          <Route path="/dashboard" render={(props) => (
              <Dashboard {...props}/>
            )}/>

        </Switch>
      </div>
    )
  }

}


export default Routes;
