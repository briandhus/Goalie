import React from "react";
import helpers from "../utils/helpers"

class Form extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      goal: [{goalName: ''}, {goalDate: ''}], 
      task: [{taskName: ''}, {taskDate: ''}]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({goal: [{goalName: document.getElementById('goalGroupInput').value}, {goalDate: document.getElementById('goaldate-input').value}], 
      task: [{taskName: document.getElementById('taskGroupInput').value}, {taskDate: document.getElementById('taskdate-input').value}]})
    console.log(this.state) 
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
        <div className="row align-items">
          <div className="row">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupInput">Goal:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            
              <div className="form-group col-md-9">
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="goalGroupInput" placeholder="Goal input"/>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} id="goaldate-input"/>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="taskGroupInput" placeholder="Task input"/>
                <input className="form-control" type="date" value={this.state.value} onChange={this.handleChange} id="taskdate-input"/>
                 <button type="submit" className="formButton btn btn-danger">Submit</button>
              </form>  
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
          
        </div>

        <br/>
        <div className="form-group row">
          <div className="col-md-10 col-md-offset-1">
           

          </div>
        </div>

        {/*<div className="row align-items">
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
              <input type="text" className="form-control" id="formGroupInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="date-input"/>
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
              <input type="text" className="form-control" id="formGroupInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="date-input"/>
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
              <input type="text" className="form-control" id="formGroupInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="date-input"/>
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
              <input type="text" className="form-control" id="formGroupInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="date-input"/>
            </div>
          </div>  
          <br/>
          <div className="form-group row">
            <div className="col-md-10 col-md-offset-1">
              <button type="submit" className="formButton btn btn-danger">Submit</button>
            </div>
          </div>
        </div>*/}

      </div>
    )
  }
}

export default Form;
