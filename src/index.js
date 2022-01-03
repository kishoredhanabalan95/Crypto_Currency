import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';    

import App from './App';
import Store from './app/store';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <provider store={store}>
            <App />
        </provider>
    </Router>,
    document.getElementById('root')
);