import React from "react";

import Header from "./Header.jsx";
import routesR from "./routesR.jsx";

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
        <div>
          <Header/>
          <div className="container">

            <routesR/>

          </div>
        </div>
    )};
}

export default Main;