import React from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./Header.jsx";
import StartR from "./StartR.jsx";


class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return(
        <div className="container">

          <Header/>
          <StartR/>

        </div>
   )};
}

export default Main;