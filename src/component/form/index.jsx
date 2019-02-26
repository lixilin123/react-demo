import React from 'react';
import './index.scss'
import {observer, inject} from 'mobx-react'

@inject('appData')
@observer
export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentDidMount() {
        
    }

    // 跳转到首页
    routeToHome() {
        this.props.history.push('/')
    }

     // 存储输入
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    // 添加动物
    add() {
        this.props.appData.addAnimal(this.state.inputValue)
    }

    render() {
        return (
            <div className='Form'>
                <input type="text" placeholder='输入一种动物...' onChange={this.inputChange.bind(this)}/>
                <button onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }
}