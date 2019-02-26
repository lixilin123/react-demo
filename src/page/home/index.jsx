import React from 'react';
import './index.scss'
import {observer, inject} from 'mobx-react'

import Form from '../../component/form/index.jsx'

@inject('appData')
@observer
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
                <br/>
                <button onClick={this.routeToLogin.bind(this)}>登录页</button>
                <button onClick={this.routeToNews.bind(this)}>新闻页</button>

                <hr/>
                Mobx测试：
                <br/>
                <p>现在有{this.props.appData.animalsLength}种动物</p>    
                <Form></Form>
                <ul>
                    {this.props.appData.animals.map((val, index) => {
                        return <li key={index}>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}