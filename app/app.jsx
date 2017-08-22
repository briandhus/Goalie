import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// render((
//   <BrowserRouter>
//      <App /> 
//   </BrowserRouter>
// ), document.getElementById("app"));

import  Main from './components/Main.jsx';

// RM Using below lines for quick testing
render(<BrowserRouter>
      	<Main /> 
	  </BrowserRouter>, document.getElementById("app"));
