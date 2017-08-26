import React from 'react';
import helpers from '../utils/helpers';

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

  // componentDidMount() {
  //   helpers.getUser('RoperTest').then((res) => {
  //     console.log('DidMount response', res);
  //     console.log('DidMount response.data', res.data);
  //     debugger
  //     this.setState({
  //       renderUser: res.data[0].username,
  //       goal: res.data[0].goal.goalTitle,
  //       due: res.data[0].goal.goalDue,
  //       goalComplete: res.data[0].goal.goalComplete,
  //       subtask1: res.data[0].goal.subtask[0],
  //       subtask2: res.data[0].goal.subtask[1],
  //       subtask3: res.data[0].goal.subtask[2],
  //       subtask4: res.data[0].goal.subtask[3],
  //       subtask5: res.data[0].goal.subtask[4]
  //     });
  //   });
  // }

  render() {
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
                <h3>{this.props.username}</h3>
                <h4 className="panel-title">Goal: {this.props.goal.goalTitle}</h4>
                <h5 className="panel-title">{this.props.goal.goalDue}</h5>
              </div>
              <div className="panel-body">
                
              
                {/*{this.props.goal.tasks.map(function(task, i) {
                  return (
                    <div>
                      <p key={i}>{task.taskTitle}</p>
                      <button className="complete-task" id={i}> Complete </button>
                    </div>
                  );
                })}*/}

                <a href="/form" className="btn btn-success">Create New Goal</a>

              </div>
            </div>           
      		</div>
      	</div>
      </div>
    )
  }
}

export default Dashboard;