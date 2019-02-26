import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './router/index'
import {HashRouter as Router} from 'react-router-dom';
import appData from './store/appData.js'
import {Provider} from 'mobx-react'

ReactDOM.render(
    <Router>
        <Provider appData={appData}>
            <App></App>
        </Provider>
    </Router>,
    document.getElementById('root')
)
