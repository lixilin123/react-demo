import React from 'react';
import './index.scss'

export default class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log('News', this.props)
    }

    // 跳转到首页
    routeToHome() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='News'>
                This is News.
                <button onClick={this.routeToHome.bind(this)}>返回首页</button>
            </div>
        )
    }
}