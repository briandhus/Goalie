import React from "react";
import { Switch, Route } from "react-router-dom";



class Form extends React.Component {

  constructor(props){
    super(props);
    
  }

  render () { 
    return (      
      <div className="container">
        <div className="row align-items">
          <div className="row">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupExampleInput">Goal:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupExampleInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Goal input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="example-date-input"/>
            </div>
          </div>
        </div>

        <hr/>
        <div className="row align-items">
          <div className="row task">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupExampleInput">Task:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupExampleInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="example-date-input"/>
            </div>
          </div>  
        </div>

        <div className="row align-items">
          <div className="row task">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupExampleInput">Task:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupExampleInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="example-date-input"/>
            </div>
          </div>  
        </div>

        <div className="row align-items">
          <div className="row task">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupExampleInput">Task:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupExampleInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="example-date-input"/>
            </div>
          </div>  
        </div>

        <div className="row align-items">
          <div className="row task">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupExampleInput">Task:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupExampleInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="example-date-input"/>
            </div>
          </div>  
        </div>

        <div className="row align-items">
          <div className="row task">
            <div className="form-group col-md-9">
              <label htmlFor="formGroupExampleInput">Task:</label>    
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="formGroupExampleInput">Date:</label>    
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-9">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Task input"/>
            </div>
            <div className="form-group col-md-3">
              <input className="form-control" type="date" value="2017-09-19" id="example-date-input"/>
            </div>
          </div>  
          <br/>
          <div className="form-group row">
            <div className="col-md-10 col-md-offset-1">
              <button type="submit" className="formButton btn btn-danger">Submit</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Form;
