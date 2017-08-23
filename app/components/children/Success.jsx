import React from 'react';

class Success extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      stayOnPage: true
    }
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    // SET VARIABLES HERE for use in render
    // var that = this;

    // ADD: variable for the goal from the database
    // ADD: function expression to iterate through subtasks & due dates

    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-md-3 dashboard-outline-test">
      			{/* Need to insert Avatar href link */}
            <img alt="avatar image" src="./assets/images/level-1.png"/>

      		</div>
      		<div className="col-md-9 dashboard-outline-test">
            {/* Need to insert goals */}
      			<h3>Dashboard: Goal Info Section</h3>            
      		</div>
      	</div>
      </div>
    )
  }
}

export default Dashboard;