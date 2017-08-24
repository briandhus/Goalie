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
  }

  render(){
    return (
      <Switch>
        <Route exact path="/" component={LoginOrStart}/>
        <Route path="/about" component={About}/>   

        <Route path="/form" render={(props) => (
            <Form />
          )}/>      

        <Route path="/dashboard" render={(props) => (
            <Dashboard />
          )}/>
      </Switch>
    )
  }

}


export default Routes;
