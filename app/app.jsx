import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main.jsx';
import routes from './react-controller/react-routes.jsx';
import Dashboard from './components/children/Dashboard.jsx';

render(<BrowserRouter>
      	<Main /> 
	  </BrowserRouter>, document.getElementById("app"));


