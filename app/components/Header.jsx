import React from 'react';
import {Link} from 'react-router-dom';

var Header = () => (
  <div className="row header">
    <nav className="navbar-toggleable-md navbar-light bg-faded">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar">
          <Link className="navbar-brand" to="/">GOOOOAL</Link>
          <Link className="navbar_about" to="/about">About</Link>
          <Link className="nav-item nav-link navbar_profile" to="/Dashboard">Profile</Link>
        </div>
      </div>
    </nav>
  </div>
)

export default Header;