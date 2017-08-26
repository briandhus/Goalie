import React from "react";
import helpers from "../utils/helpers"

class Form extends React.Component {

  constructor(props){
    super(props);
    // set initial state for goal, tasks, and dates
    this.state = {
      goalName: '',
      goalDate: '',
      task: [{
        taskName: '', taskDate: ''},{
        taskName: '', taskDate: ''},{
        taskName: '', taskDate: ''},{
        taskName: '', taskDate: ''},{
        taskName: '', taskDate: ''},{
        taskName: '', taskDate: ''
      }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {

   
    
    var changeTarget = event.target.id
    var obj = {}
    obj[changeTarget] = event.target.value


    
    if (event.target.id === "goalName" || event.target.id === "goalDate"){
      console.log(obj)
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
    console.log(this.state)
    // console.log({changeTarget:  event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    // var GoogleAuth = gapi.auth2.getAuthInstance();
    // var user = GoogleAuth.currentUser.get()
    helpers.googCalPush(this.state.goal, this.state.task)
  }


  render () { 
    return (      
      <div className="container">

        <form onSubmit={this.handleSubmit}>
          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Goal:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="goalName" placeholder="Goal input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} id="goalDate"/>
              </div>
            </div> 
          </div> 
          <hr/>
          
          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Task:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="taskName" data-index ="0" placeholder="Task input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="0" id="taskDate"/>
              </div>
            </div>  
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Task:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="1" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="1" id="taskDate"/>
              </div>
            </div>  
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Task:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="2" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="2" id="taskDate"/>
              </div>
            </div>  
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Task:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="3" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="3" id="taskDate"/>
              </div>
            </div>  
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Task:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="4" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="4" id="taskDate"/>
              </div>
            </div>  
          </div>

          <div className="row align-items">
            <div className="row task">
              <div className="form-group col-md-9">
                <label htmlFor="formGroupInput">Task:</label>    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="formGroupInput">Date:</label>    
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-9">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} data-index ="5" id="taskName" placeholder="Task input"/>
              </div>
              <div className="form-group col-md-3">
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} data-index ="5" id="taskDate"/>
              </div>

              <div className="form-group row">
                <div className="col-md-10 col-md-offset-1">
                  <button type="submit" className="formButton btn btn-danger" onClick={this.handleSubmit} >Submit</button>
                </div>
              </div>

            </div>  
          </div>
        </form>

      </div>
    )
  }
}

export default Form;
