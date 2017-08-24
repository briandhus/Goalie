import React from "react";
import { Route, NavLink } from "react-router-dom";
import About from "./children/About.jsx";
import Dashboard from "./children/Dashboard.jsx";


class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
        <div className="container">

          <div className="row header">
            <nav className="navbar-toggleable-md navbar-light bg-faded">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar">
                  <NavLink className="navbar-brand" href="/">GOOOOAL</NavLink>
                  <NavLink className="navbar_about" href="/about">About</NavLink>
                  <NavLink className="nav-item nav-link navbar_profile" href="/Dashboard">Profile</NavLink>
                </div>
              </div>
            </nav>
          </div>
        
          {/*<div className="row">
            <Route path="/about" component={About} />
              <Link to="/about">About component</Link>
              <h1>This is the main component</h1>
            <Route path="/Dashboard" component={Dashboard} />
            <Link to="/Dashboard">Dashboard component</Link>
          </div>*/}

        </div>
   )};
}

export default Main;