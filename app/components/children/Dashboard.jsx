import React from 'react';
import helpers from '../utils/helpers';

class Dashboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderUser: '',
      goal: '',
      due: '',
      subtask1: '',
      subtask2: '',
      subtask3: '',
      subtask4: '',
      subtask5: ''
    }
  }

  componentDidMount() {
    // CHECK: on mount, this should call to server for a response 
    helpers.getUser('RoperTest').then(function(response) {
      console.log('DidMount response', response);
      console.log('DidMount response.data', response.data);
      this.setState({
        renderUser: 'Looking for username',
        goal: 'Find the goal',
        due: 'today'
      });
    }).bind(this);
  }

  componentDidUpdate() {
    // Run the query for the address
    // helpers.runQuery(this.state.searchTerm).then(function(data) {
    //   if (data !== this.state.results) {
    //     console.log("Address", data);
    //     this.setState({ results: data });

    //     // After we've received the result... then post the search term to our history.
    //     helpers.postHistory(this.state.searchTerm).then(function() {
    //       console.log("Updated!");

    //       // After we've done the post... then get the updated history
    //       helpers.getHistory().then(function(response) {
    //         console.log("Current History", response.data);

    //         console.log("History", response.data);

    //         this.setState({ history: response.data });

    //       }.bind(this));
    //     }.bind(this));
    //   }
    // }.bind(this));
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
            <img alt="avatar image" src="./assets/images/level-1.png"/>
      		</div>

      		<div className="col-md-9 dashboard-outline-test">
            {/* Need to insert goals */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3>{this.state.renderUser}'s Goal:</h3>
                <h4 className="panel-title">{this.state.goal} due by {this.state.due}</h4>
              </div>
              <div className="panel-body">
                Insert tasks here
              </div>
            </div>           
      		</div>
      	</div>
      </div>
    )
  }
}

export default Dashboard;