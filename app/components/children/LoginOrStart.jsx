import React from "react";

class LoginOrStart extends React.Component {

  constructor(props){
    super(props);
    
  }

  componentDidUpdate(prevProps, prevState){
    // console.log('prevProps are')
    // console.log(prevProps)
    console.log('LoginOrStart re-rendering!')
    this.render();
  }

  render() {
    if (this.props.userLogged === false && this.props.serverResponded === true) {
      var content = (
        <div className="card text-center">
          <div className="card-block">
              <h1 className="card-title">Welcome to Goalie</h1>
              <h4 className="card-text">Log in with Google and start accomplishing your dreams today.</h4>
              <br/>
              <a href="auth/google" className="btn btn-primary">Login</a>
          </div>
        </div>
      )
    } else if (this.props.userLogged === true && this.props.serverResponded === true){
      var content = (
        <div className="card text-center">
          <div className="card-block">
              <h1 className="card-title">Welcome to Goalie</h1>
              <h4 className="card-text">Create or see your current goal</h4>
              <br/>
              <a href="/form" className="btn btn-success">Create Goal</a>
              <a href="/dashboard" className="btn btn-info">See Goal</a>
          </div>
        </div>
      )
    } else {
      var content = (<h3>Waiting for server ...</h3>)
    }
  	return (
      <div>
        {content}
      </div>
  	)
  }
}

export default LoginOrStart;