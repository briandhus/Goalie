import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "./Header.jsx";
import routesR from "./routesR.jsx";
import LoginOrStart from './children/LoginOrStart.jsx';
import About from './children/About.jsx';
import Form from './children/form.jsx';
import Dashboard from './children/Dashboard.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
        <div>
          <Header/>
          <RoutesR />
        </div>
        
    )};
}

export default Main;