import React from 'react';
import {Link, Route} from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

        <div className="row header">
          <nav className="navbar-toggleable-md navbar-light bg-faded">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar">
                
                <Link className="navbar_brand" to="/">
                  <img alt= "image" src="./assets/images/Motivate.png" className="logo" />
                </Link>
                <Link className="navbar_about" to="/about">About</Link>
                <Link className="nav-item nav-link navbar_profile" to="/dashboard">Profile</Link>

              </div>
            </div>
          </nav>
        </div>
    )}
}

export default Header;