// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;

// Inclue the React library
import React from 'react';

// Include the Route component for displaying individual routes
//Include the Link component to create links
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Main from '../components/Main.jsx';
import Login from '../components/children/Login.jsx';
import About from '../components/children/About.jsx';
import Start from '../components/children/Start.jsx';
import Form from '../components/children/form.jsx';
import Dashboard from '../components/children/Dashboard.jsx';
// import Success from '../components/children/Success.jsx';

var routes=(
  <BrowserRouter>
    <Route component={Main} />
    <Route exact path="/" component={Start} />
    <Route path="about" component={About} />   
    <Route path="dashboard" component={Dashboard} />
    <Route path="form" component={Form} />
    <Route path="login" component={Login} />
  </BrowserRouter>
)

export default routes;
