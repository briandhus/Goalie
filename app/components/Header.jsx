import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard from './children/Dashboard.jsx';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="row header">
        <nav className="navbar-toggleable-md navbar-light bg-faded">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar">
              <Link className="navbar-brand" to="/">GOOOOAL</Link>
              <Link className="navbar_about" to="/about">About</Link>
              <Link className="nav-item nav-link navbar_profile" to="/dashboard">Profile</Link>
            </div>
          </div>
        </nav>
      </div>
    )};
}
export default Header;