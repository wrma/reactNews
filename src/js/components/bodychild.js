/*
* @Author: ThinkPad
* @Date:   2017-09-11 12:35:45
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-12 09:33:37
*/
import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyChild extends React.Component{
    render(){
        return (
            <div>
             {/*从子页面向父页面传递参数时，只能用事件形式传递(e.target.value)*/}
                <p>子页面输入：<input type="text" onChange={this.props.handleChange}/></p>
                <p>userid:{this.props.userid} username:{this.props.username} id:{this.props.id}</p>
            </div>
        )
    }
}