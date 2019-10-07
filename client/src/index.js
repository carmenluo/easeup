import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
