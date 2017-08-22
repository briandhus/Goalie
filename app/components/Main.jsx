import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./children/About.jsx";
import Dashboard from "./children/Dashboard.jsx";


class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
      <div className="errthang">
        <div className="container">

        <div className="row">

          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar">
                <a className="navbar-brand" href="/">GOOOOAL</a>
                <a className="nav-item nav-link navbar_about navbar-right" href="/about">About</a>
                <a className="nav-item nav-link navbar_profile navbar-right" href="/Dashboard">Profile</a>
              </div>
            </div>
          </nav>

        <Route path="/about" component={About} />
          <Link to="/about">About component</Link>
          <h1>This is the main component</h1>
      	<Route path="/Dashboard" component={Dashboard} />
          <Link to="/Dashboard">Dashboard component</Link>
      </div>
    </div>
    </div>
   )};
}

export default Main;