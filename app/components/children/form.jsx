import React from "react";
import { Switch, Route } from "react-router-dom";

class Form extends React.Component {

  constructor(props){
    super(props);
    
  }

  render () {
    // var that = this;  
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      // <main>
        // <h3>I am the form page</h3>
      // </main>
    )
  }
}

export default Form;