import React from 'react';
import { render } from 'react-dom';

// import { BrowserRouter } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
// import  Main from './components/Main.jsx';

import routes from './react-controller/react-routes.jsx';

// import Form from './components/children/Form.jsx';

// render(<Dashboard />, document.getElementById('app'));

// render(<Form />, document.getElementById('app'));

render(routes, document.getElementById("app"));
