import React from "react";
import { Switch, Route } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 'Write your goal here.',
      task: 'Create task'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    this.setState({
      [name]: value
    });
    event.preventDefault();
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Goal:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// class Form extends React.Component {

  // constructor(props){
  //   super(props);
    
  // }

  // render () { 
  //   return (      
  //     <div>
  //       <form>
  //         <label>
  //           Name:
  //           <input type="text" name="name" />
  //         </label>
  //         <input type="submit" value="Submit" />
  //       </form>
  //     </div>
  //   )
  // }
// }

export default Form;