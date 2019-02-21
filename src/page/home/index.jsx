import React from 'react';
import './index.scss'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log('Home', this.props)
    }

    // 跳转到登录页
    routeToLogin() {
        this.props.history.push('login/lixilin?age=23')
    }

    // 跳转到新闻页
    routeToNews() {
        this.props.history.push('news')
    }

    render() {
        return (
            <div className='Home'>
                This is Home.
                <button onClick={this.routeToLogin.bind(this)}>登录页</button>
                <button onClick={this.routeToNews.bind(this)}>新闻页</button>
            </div>
        )
    }
}