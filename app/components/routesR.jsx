import React from 'react';
import axios from 'axios';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LoginOrStart from './children/LoginOrStart.jsx';
import About from './children/About.jsx';
import Form from './children/form.jsx';
import Dashboard from './children/Dashboard.jsx';


class Routes extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      userLogged: false,
      serverResponded: false,
      username: '', 
      goal: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.createGoal = this.createGoal.bind(this);
  }

  componentDidMount(){
    var that = this;  
    axios.get('/api/loggedin').then((data) =>{
      that.setState({
        serverResponded: true,
        userLogged: data
      })
    });
    axios.get('/api/user').then((foundUser) =>{
      that.setState({
        username: foundUser.username,
        goal: foundUser.goal
      })
    });
    
  }

  componentDidUpdate(){
    //TODO:
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
        <Route exact path="/" component={LoginOrStart}/>
        <Route path="/about" component={About}/>

        <Route exact path="/form" render={(props) => (
            <Form {...props}/>
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
