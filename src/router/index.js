import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import asyncComponent from './asyncComponent';

class App extends React.Component {
    render() {
        return (
            <Switch key={this.props.location.pathname}>
                <Route exact path='/' component={asyncComponent(() => import('../page/home/index.jsx'))}/>
                <Route path='/login/:name' component={asyncComponent(() => import('../page/login/index.jsx'))}/>
                <Route path='/news' component={asyncComponent(() => import('../page/news/index.jsx'))}/>
            </Switch>
        )
    }
}

export default withRouter(App);