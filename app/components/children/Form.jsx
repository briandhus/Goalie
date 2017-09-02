import React from "react";
import helpers from "../utils/helpers";
import {Link} from 'react-router-dom';
// import PropTypes from "prop-types";

class Form extends React.Component {
  constructor(props){
    super(props);
    // set initial state for goal, tasks, and dates
    this.state = {
      goalName: '',
      goalDate: '',
      task: [{
        taskName: '', taskDate: '', taskComplete: false},{
        taskName: '', taskDate: '', taskComplete: false},{
        taskName: '', taskDate: '', taskComplete: false},{
        taskName: '', taskDate: '', taskComplete: false},{
        taskName: '', taskDate: '', taskComplete: false},{
        taskName: '', taskDate: '', taskComplete: false
      }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    helpers.googInit()
  }
  handleChange(event) {

    var changeTarget = event.target.id
    var obj = {}
    obj[changeTarget] = event.target.value

    if (event.target.id === "goalName" || event.target.id === "goalDate"){
      // console.log(obj)
      this.setState(
      obj);
    } else {
      var index = event.target.getAttribute('data-index')
      var tasks = this.state.task;
      tasks[index][changeTarget] = event.target.value
      // console.log(event.target.getAttribute('data-index'))
      // console.log(obj)
      this.setState(
        tasks,
      );
    }
    // console.log(this.state)
    // console.log({changeTarget:  event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    helpers.googCalPush(this.state.goalName, this.state.goalDate, this.state.task)
    // console.log(this.state.task)

    var goalObject = {
      goalTitle: this.state.goalName,
      goalDue: this.state.goalDate
    };

    var taskObject = {
      tasks: []
    }

    for (var i = 0; i < this.state.task.length; i++) {
      taskObject.tasks.push({
        taskTitle: this.state.task[i].taskName.trim(),
        taskDue: this.state.task[i].taskDate
      })
    }
    // console.log('GOALOBJECT', goalObject);
    // var GoogleAuth = gapi.auth2.getAuthInstance();
    // var user = GoogleAuth.currentUser.get()
    helpers.createGoal(goalObject);
    helpers.createTasks(taskObject)
    this.props.createGoal(goalObject, taskObject);
    // console.log('transitionTo')
    // console.log(event.target.href)
    // this.context.router.push(event.target.href)
  }


  render () {
    return (
      <div className="container form">
        <form >
          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="goalInput">Goal:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="goalName" placeholder="Goal input"/>
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="goalInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} id="goalDate" placeholder="mm/dd/yyyy"/>

              </div>
            </div>
          </div>
          <hr/>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="taskInput">Task:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="taskName" data-index ="0" placeholder="Task input"/>
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="taskInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="0" id="taskDate" placeholder="mm/dd/yyyy"/>

              </div>
            </div>
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="taskInput">Task:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="1" id="taskName" placeholder="Task input"/>

              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="taskInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="1" id="taskDate" placeholder="mm/dd/yyyy"/>
              </div>
            </div>
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="taskInput">Task:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="2" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="taskInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="2" id="taskDate" placeholder="mm/dd/yyyy"/>
              </div>
            </div>
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="taskInput">Task:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="3" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="taskInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="3" id="taskDate"  placeholder="mm/dd/yyyy"/>
              </div>
            </div>
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="taskInput">Task:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="4" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="taskInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="4" id="taskDate" placeholder="mm/dd/yyyy"/>

              </div>
            </div>
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-sm-9">
                <label htmlFor="formGroupInput" className="taskInput">Task:</label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="5" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-sm-3">
                <label htmlFor="formGroupInput" className="taskInput">Date:</label>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="5" id="taskDate" placeholder="mm/dd/yyyy"/>
              </div>
            </div>

            <br/>

            <div className="form-group row">
              <div className="col-sm-10 col-sm-offset-1" onClick={this.handleSubmit}>
                <Link href='/' to='/' className="formButton btn btn-danger"  >
                  Submit
                </Link>

              </div>
            </div>

          </div>
        </form>

      </div>
    )
  }
}

// Form.contextTypes = {
//   router: PropTypes.object
// }
export default Form;
