import React from 'react';
import './index.scss'

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log('Login', this.props)
        console.log(this.props.match.params.name, this.props.location.search.substring(1))
    }

    // 跳转到首页
    routeToHome() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='Login'>
                This is Login.
                <button onClick={this.routeToHome.bind(this)}>返回首页</button>
            </div>
        )
    }
}