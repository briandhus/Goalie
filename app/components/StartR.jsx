<<<<<<< HEAD
=======
import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./children/DashboardR";
import form from "./children/components/form";

class Start extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1> This is the StartR component</h1>
    )
  }


  // render () {
  //   var that = this;  
  //   return (
  //     <main>
  //     <h1>This is the startR component</h1>
  //       <Switch>
  //         <Route path="/dashboard" component={DashboardR}/>
  //         <Route path="/form" component={form}/>
  //       </Switch>
  //     </main>
  //   )
  // }
}

export default Start;
>>>>>>> 4e3ba3bb5421234848fa1542a56422ef932749bb
