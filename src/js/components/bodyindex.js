/*
* @Author: ThinkPad
* @Date:   2017-09-08 10:19:12
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-14 15:08:38
*/
import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

import ReactMixin from 'react-mixin';
import MixinLog from './mixins.js';
import { Input } from 'antd';

const defaultProps = {
    username: '默认用户名'
};

export default class BodyIndex extends React.Component{
    // 构造函数
    constructor(){
        super(); //调用基类的所有初始化方法
        // state作用域只属于当前的类，不污染其他模块
        this.state = {
            username:'wrma',
            age: 20
        }; //初始化赋值
    };

    changeUserInfo(age){
        this.setState({
            age : age
        });
    };

    handleChange(e){
        this.setState({
            age : e.target.value
        });
    };

    render(){
        // setTimeout(()=>{
        //     //更改state
        //     this.setState({username:'deamon'});
        // },4000)
        return (
            <div>
                <h2>页面主题内容</h2>
                <p>父页面的属性：username : {this.props.username} userid : {this.props.userid}</p>
                <Input placeholder="wrma"/>
                <Input id='submitButton' ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,50)}/>
                <p>age:{this.state.age}</p>
                <BodyChild {...this.props} id={4} handleChange = {this.handleChange.bind(this)}/>
            </div>
        )
    }
}

// 判断属性，必须为数字且不能为空
BodyIndex.propTypes = {
    userid: React.PropTypes.number.isRequired
}

//默认参数
BodyIndex.defaultProps = defaultProps;
