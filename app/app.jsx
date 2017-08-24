import React from 'react';
import { render } from 'react-dom';

// import { BrowserRouter } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

import  Main from './components/Main.jsx';

// import ReactRoutes from './react-controller/react-routes';
// import ReactRoutes from './react-controller/react-routes';
import Dashboard from './components/children/Dashboard.jsx';

// import  Main from './components/Main.jsx';

import routes from './react-controller/react-routes.jsx';



// import Form from './components/children/Form.jsx';
// import Login from './components/children/Login.jsx'


// render(<Dashboard />, document.getElementById('app'));

// render(<Form />, document.getElementById('app'));

render(<BrowserRouter>
      	<Main /> 
	  </BrowserRouter>, document.getElementById("app"));

// render(<Login />, document.getElementById('app'));

// import routes from './react-controller/react-routes.jsx';

// import Form from './components/children/Form.jsx';
import Dashboard from './components/children/Dashboard.jsx';
render(<Dashboard />, document.getElementById('app'));

// render(<Form />, document.getElementById('app'));

// render(routes, document.getElementById("app"));

