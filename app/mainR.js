import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./about.js";
import startR from "./components/startR.js";

class Main extends React.Component {

  constructor(props){
    super(props);
  }


  render () {
    var that = this;  
    return (
      <main>
      <h1>This is the mainR component</h1>
        <Switch>
          <Route path="/start" component={startR}/>
          <Route path="/about" component={About}/>
        </Switch>
      </main>
    )
  }
}

export default Main;