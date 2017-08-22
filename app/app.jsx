import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import Dashboard from './components/children/Dashboard.jsx';

// render((
//   <BrowserRouter>
//      <App /> 
//   </BrowserRouter>
// ), document.getElementById("app"));
=======
import  Main from './components/Main.jsx';
>>>>>>> 85d3081931b59ade9be342088d5a7336858db628

// RM Using below lines for quick testing
render(<BrowserRouter>
      	<Main /> 
	  </BrowserRouter>, document.getElementById("app"));
