import React from "react";

class Login extends React.Component {

  constructor(props){
    super(props);
    
  }

  render() {
  	return (

			<div className="card text-center">
				<div className="card-block">
				    <h1 className="card-title">Welcome to Goalie</h1>
				    <h4 className="card-text">Log in with Google and start accomplishing your dreams today.</h4>
				    <br/>
				    <a href="#" className="btn btn-primary">Login</a>
				</div>
			</div>
  	)
  }
}

export default Login;
