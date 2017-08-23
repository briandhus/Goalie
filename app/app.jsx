import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Main from './components/Main.jsx';
import ReactRoutes from './react-controller/react-routes';

import Form from './components/children/Form.jsx';

render(<Form />, document.getElementById('app'));

// render(<BrowserRouter>
//       	<Main /> 
// 	  </BrowserRouter>, document.getElementById("app"));
