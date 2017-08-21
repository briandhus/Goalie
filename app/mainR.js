import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./about";
import startR from "./components/startR";

class Main extends React.Component {

  constructor(props){
    super(props);
    // this.state = {savedResults: []};
    // this.setMainResults = this.setMainResults.bind(this);
  }

  // setMainResults (results){
  //   this.setState({savedResults: results});
  // }

  render () {
    var that = this;  
    return (
      <main>
        <Switch>
          <Route path="/start" component={CreateR, DGashboardR}/>
          <Route path="/about" component={About}/>
        </Switch>
      </main>
    )
  }
}

export default Main;