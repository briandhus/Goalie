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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.createGoal = this.createGoal.bind(this);
  }

  componentDidMount(){
    var that = this;  
    axios.get('/api/loggedin').then((logincheck) =>{
      console.log('/api/loggedin returns')
      console.log(logincheck)
      that.setState({
        serverResponded: true,
        userLogged: logincheck.data.logged
      })
      console.log('server responded with userLogged')
      axios.get('/api/user').then((foundUser) =>{
        that.setState({
          username: foundUser.username,
          goal: foundUser.goal
        })
        console.log('server returned user Obj')
        that.render()
      });


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
        <Route exact path="/"  render={(props) => (
          <LoginOrStart userLogged={this.state.userLogged} serverResponded={this.state.serverResponded}/>
        )}/>
        <Route path="/about" component={About}/>   

        <Route path="/form" render={(props) => (
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
