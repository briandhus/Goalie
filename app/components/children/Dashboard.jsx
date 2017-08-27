import React from 'react';
import helpers from '../utils/helpers';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component {

  constructor(props){
    super(props);

    // this.state = {
    //   renderUser: '',
    //   goal: '',
    //   due: '',
    //   goalComplete: '',
    //   subtask1: '',
    //   subtask2: '',
    //   subtask3: '',
    //   subtask4: '',
    //   subtask5: ''
    // }
  }

  render() {
    var that = this;

    return (
    	<div className="container dashboard">
    		<div className="row">
    			<div className="col-md-3 dashboard-outline-test">
            <img alt="avatar image" src="./assets/images/level-1.png"/>
      		</div>

      		<div className="col-md-9 dashboard-outline-test">
            {/* Need to insert goals */}
            <div className="panel panel-default">
              <div className="panel">
                <h3>{this.props.username}'s Goal</h3>
                <hr />
                
                <h4 className="panel-title">Goal: {
                  (function() {
                    if (that.props.goal.goalTitle) {
                      return (that.props.goal.goalTitle);
                    }
                    else {
                      return ('No goal set yet')
                    }
                  }) ()
                }
                </h4>
                <br/>
                <h5 className="panel-title">Due: {/*this.props.goal.goalDue*/}</h5>

                <Link to="/success">
                  <button className="btn btn-success complete_btn">Click to complete goal</button>
                <br />
                </Link>
              </div>
              <div className="panel-body">
                
              
                {/*this.props.goal.tasks.map(function(task, i) {
                  return (
                    <div>
                      <p key={i}>{task.taskTitle}</p>
                      <button className="complete-task" id={i}> Complete </button>
                    </div>
                  );
                })}*/}

                <Link to="/form">
                  <button className="btn btn-success">Create New Goal</button>
                </Link>

              </div>
            </div>           
      		</div>
      	</div>
      </div>
    )
  }
}

export default Dashboard;