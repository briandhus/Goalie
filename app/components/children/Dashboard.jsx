import React from 'react';
import helpers from '../utils/helpers';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component {

  constructor(props){
    super(props);

  }
    
  componentDidUpdate(){
    this.render()
  }

  clickHandler (goalTitle){
    helpers.completeGoal(goalTitle)
  }

  render() {
    var that = this;

      console.log(that.props.goal);
    return (
    	<div className="container dashboard">
    		<div className="row">
    			<div className="col-md-3 dashboard-outline-test">
            {/* TODO: need to pass the data from the  */}
            <img alt="avatar image" src={`./assets/images/level${this.props.gearLevel}.png`}/>
            }
      		</div>

      		<div className="col-md-9 dashboard-outline-test">
            {/* Need to insert goals */}
            <div className="panel panel-default">
              <div className="panel">
                <h3>{this.props.username}'s Goal</h3>
                
                <h4 className="panel-title"> {
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
                <h5 className="panel-title">Due: {
                  (function() {
                    var goalDue = that.props.goal.goalDue;
                    if (goalDue) {
                      return (goalDue.slice(0, goalDue.indexOf('T')));
                    }
                    else {
                      return ('n/a')
                    }
                  }) ()
                }</h5>

                {
                  function(){
                    if (that.props.goal.goalTitle) {
                      return(
                        <div onClick={that.clickHandler.bind(that,that.props.goal.goalTitle)}> 
                          <Link to="/success">
                            <button className="btn btn-success complete_btn">Click to complete goal</button>
                          <br />
                          </Link>
                        </div>
                      )
                    }
                  }()
                }
              </div>
              <div className="panel-body">
                  {that.props.tasks.map(function(task, i) {
                    return (
                      function () {
                        if (task.taskTitle){
                          if (!task.taskComplete) {
                            return (
                              <div className='row' key={i}>
                                <div className="col-md-9">
                                  <p className="task-text task-complete">{task.taskTitle}</p>
                                </div>
                                {/* TODO (maybe): NEED TO ADD A DIV HERE IF WE WANT TO SHOW THE TASK DUE DATE ALSO */}
                                <div className="col-md-3">
                                  {/* TODO: add an onClick that checks sets task to uncomplete and deducts the xp */}
                                  <button className="btn btn-info complete-task" id={i} onClick={that.props.updateTask.bind(that,task)}>
                                    Mark Complete
                                  </button>
                                </div>
                              </div>
                            )
                          } else {
                            return (
                              <div className='row' key={i}>
                                <div className="col-md-9">
                                  <p key={i} className="task-text gray-out">{task.taskTitle}</p>
                                </div>
                              </div>
                            )
                          }
                        }
                      } ()                    
                    )
                  })}

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