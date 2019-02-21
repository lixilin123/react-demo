import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './router/index'
import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App></App>
    </Router>,
    document.getElementById('root')
)
