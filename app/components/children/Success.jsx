import React from 'react';
import {Link} from 'react-router-dom';

class Success extends React.Component {

  constructor(props){
    super(props);

    // this.state = {
    //   stayOnPage: true
    // }
  }

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
              <Link to="/form">
                <button className="btn btn-success">Create New Goal</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Success;