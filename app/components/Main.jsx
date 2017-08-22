import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./children/About.jsx";

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
      <div>
        <Route path="/about" component={About} />
          <Link to="/about">About component</Link>
      	<h1>This is the Main component</h1>
      </div>
   )};
}

export default Main;