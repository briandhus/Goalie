// // Inclue the React library
// var React = require("react");

// // Include the react-router module
// var router = require("react-router");

// // Include the Route component for displaying individual routes
// var Route = router.Route;

// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;

// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.hashHistory;

// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

// Inclue the React library
import React from 'react';

// Include the react-router module
// import router from 'react-router';

// Include the Route component for displaying individual routes
//Include the Link component to create links
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Reference the high-level components
// var Main = require("../components/Main");
import Main from '../components/Main.jsx';
// var Login = require("../components/children/Login");
import Login from '../components/children/Login.jsx';
// var About = require("../components/children/About");
import About from '../components/children/About.jsx';
// var Start = require("../components/children/Start");
import Start from '../components/children/Start.jsx';
// var Form = require("../components/children/form");
import Form from '../components/children/form.jsx';
// var Dashboard = require("../components/children/Dashboard");
import Dashboard from '../components/children/Dashboard.jsx';
// var Success = require("../components/children/Success");
import Success from '../components/children/Success.jsx';


var routes=((
   <BrowserRouter>

    <Switch>
      <Route exact path="/" component={Start}>
        <Route path="about" component={About} />   
        <Route path="dashboard" component={Dashboard} />
        <Route path="form" component={Form} />      
      </Route>

      <Route path="login" component={Login}></Route>
    </Switch>

  </BrowserRouter>

), document.getElementById('app'))

export default routes;
