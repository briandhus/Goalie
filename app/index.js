import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "./components/app.js";

// This code here allows us to render our main component (in this case Main)
render((
  <BrowserRouter>
     <App /> 
  </BrowserRouter>
), document.getElementById("app"));