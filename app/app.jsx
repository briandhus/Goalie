import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Main from './components/Main.jsx';

render((<BrowserRouter>
    <Main />
</BrowserRouter>), document.getElementById('app'));