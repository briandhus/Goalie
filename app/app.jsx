import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/children/Dashboard.jsx';

// render((
//   <BrowserRouter>
//      <App /> 
//   </BrowserRouter>
// ), document.getElementById("app"));

// RM Using below lines for quick testing
render(<Dashboard />, document.getElementById("app"));
