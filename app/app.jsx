import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './components/children/Dashboard.jsx';

// render((
//   <BrowserRouter>
//      <App /> 
//   </BrowserRouter>
// ), document.getElementById("app"));

import  Main from './components/Main.jsx';

// render((
//   <BrowserRouter>
//      <App /> 
//   </BrowserRouter>
// ), document.getElementById("app"));

import Form from './components/children/Form.jsx';

render(<Form />, document.getElementById("app"));

// RM Using below lines for quick testing
// render(<BrowserRouter>
//       	<Main /> 
// 	  </BrowserRouter>, document.getElementById("app"));
