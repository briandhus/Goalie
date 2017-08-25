import React from "react";
import Header from "./Header.jsx";
import RoutesR from "./RoutesR.jsx";


class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
        <div className="container">

          <Header/>
          <RoutesR/>

        </div>
   )};
}

export default Main;