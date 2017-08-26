import React from "react";
// import image from "../../../public/assets/images/eri.JPG";

class About extends React.Component {

  constructor(props){
    super(props);
    
  }

  render () {
    var that = this;  
    return (
      <div className="container about">
        <h1>About us</h1>
        <p>We are GB, a dedicated team of 5 coming together to change the world one app at a time.</p>
        

        <div className="row">
          <div className="col-md-6">
            <div className="col-md-4">
              {/*<img src={image} className="img-responsive" />*/}
              <img alt= "image" src="./assets/images/eri.JPG" />
            </div>
            <div className="col-md-8">TEXT</div>
          </div>
          <div className="col-md-6">
            <div className="col-md-4">PICTURE</div>
            <div className="col-md-8">TEXT</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-4">PICTURE</div>
            <div className="col-md-8">TEXT</div>
          </div>
          <div className="col-md-6">
            <div className="col-md-4">PICTURE</div>
            <div className="col-md-8">TEXT</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-4">PICTURE</div>
            <div className="col-md-8">TEXT</div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;