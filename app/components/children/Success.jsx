import React from 'react';
import {Link} from 'react-router';
// var Link = require("react-router").Link;

class Success extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      stayOnPage: true
    }
  }

  goalClick() {
    console.log('clicked');
  }
  // TODO: add <Link to="/form"></Link> and get the router to work
  render() {

    return (
    	<div className="container">
    		<div className="row text-center">
    			<div className="col-md-12">
      			<h2>Success!</h2>
      		</div>
          <div className="row">
        		<div className="col-md-12">
              <img alt="avatar complete image" src="./assets/images/level-6.png"/>            
        		</div>
        	</div>
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-default set-goal" onClick={this.goalClick}>Set New Goal</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Success;