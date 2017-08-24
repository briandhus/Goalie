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
        <div className="container">

          <div className="row header">
            <nav className="navbar-toggleable-md navbar-light bg-faded">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar">
                  <h1>test</h1>
                  <Link className="navbar-brand" to="/">GOOOOAL</Link>
                  <Link className="navbar_about" to="/about">About</Link>
                  <Link className="nav-item nav-link navbar_profile" to="/Dashboard">Profile</Link>

                </div>
              </div>
            </nav>
          </div>
        </div>
   )};
}

export default Main;