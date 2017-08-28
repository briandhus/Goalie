import React from "react";

class About extends React.Component {

  constructor(props){
    super(props);
    
  }

  render () { 
    return (
      <div className="container about">
        <h1>About us</h1>
        <p>We are GB, a dedicated team of 5 coming together to change the world one app at a time.</p>
        <hr />

        <div className="row">
          <div className="col-md-6">
            <div className="col-md-4">
              <img alt= "image" src="./assets/images/eri.jpg" className="about_img"/>
            </div>
            <div className="col-md-8">
            <p className="bio text-justify">
              Eri transitioned from a career as a professional human, to a career as a fullstack web developer. She has enjoyed applying her awesome skills to design and implement visually pleasing, playful, and user-friendly applications. Though a developer now, you can still catch Eri making “having way too much fun” facial expressions while coding.
            </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-4">
              <img alt= "image" src="./assets/images/brian.jpg" className="about_img"/>
            </div>
            <div className="col-md-8">
              <p className= "bio text-justify">
                Brian transitioned from a career as a professional musician, to a career as a fullstack web developer. He has enjoyed applying his creative skills to design and implement aesthetically pleasing, fun, and user-friendly applications. Though a developer now, you can still catch Brian making “rockin’ out way too hard” facial expressions while coding.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-4">
              <img alt= "image" src="./assets/images/roper.jpg" className="about_img"/>
            </div>
            <div className="col-md-8">
            <p className="bio text-justify">
              Roper transitioned from a career as a professional sumo wrestler, to a career as a fullstack web developer. He has enjoyed applying his aggressive skills to design and implement sensually pleasing, silly, and user-friendly applications. Though a developer now, you can still catch Roper making “big O(n)” facial expressions while coding.
            </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-4">
              <img alt= "image" src="./assets/images/chi.jpg" className="about_img"/>
            </div>
            <div className="col-md-8">
              <p className= "bio text-justify">
                Chi transitioned from a career as a professional tango dancer, to a career as a fullstack web developer. He has enjoyed applying his cha cha skills to design and implement rhytmically pleasing, mind-blowing, and user-friendly applications. Though a developer now, you can still catch Chi making “check the URL” facial expressions while coding.
            </p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-4">
              <img alt= "image" src="./assets/images/dylan.jpg" className="about_img"/>
            </div>
            <div className="col-md-8">
              <p className="bio text-justify">
                Dylan transitioned from a career as a professional assasin, to a career as a fullstack web developer. He has enjoyed applying his killer skills to design and implement aggressively pleasing, deadly, and user-friendly applications. Though a developer now, you can still catch Dylan making “you won't see me because you'll be dead” facial expressions while coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;