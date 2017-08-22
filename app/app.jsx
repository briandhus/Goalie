import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Main from './components/Main.jsx';

//import Dashboard from './components/children/Dashboard.jsx';

// render((
//   <BrowserRouter>
//      <App /> 
//   </BrowserRouter>
// ), document.getElementById("app"));


// render(<Form />, document.getElementById("app"));

// RM Using below lines for quick testing
render(<BrowserRouter>
      	<Main /> 
	  </BrowserRouter>, document.getElementById("app"));
