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
import router from 'react-router';

// Include the Route component for displaying individual routes
//Include the Link component to create links
import { Route, Link, Router, browserHistory, IndexRoute } from "react-router-dom";

// Reference the high-level components
import Main from '../components/Main';
import Login from '../components/children/Login';
import About from '../components/children/About';
import Start from '../components/children/Start';
import Form from '../components/children/form';
import Dashboard from '../components/children/Dashboard';


render((
   <Router history={browserHistory}>
    <Route path="/" component={App}>


      <Route path="/about" component={About} />       
      <Route path="/Dashboard" component={Dashboard} />

      {/* add it here, as a child of `/` */}
      <IndexRoute component={Start}/>
    </Route>
  </Router>
), document.getElementById('app'))

export default 
