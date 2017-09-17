/*
* @Author: ThinkPad
* @Date:   2017-09-07 16:13:03
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-15 22:03:20
*/

import React from 'react';
import {Link} from "react-router";
import ReactDOM from 'react-dom';

// 子类 export default 给外部使用的组件定义必须加上
export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            miniHeader : false
        };
    }

    switchHeader(){
        this.setState({
            miniHeader : !this.state.miniHeader
        });
    };

    render(){
        const styleComponentHeader = {
            header : {
                backgroundColor : '#333333',
                color : "#ffffff",
                paddingTop : (this.state.miniHeader) ? "3px" : "15px",
                paddingBottom : (this.state.miniHeader) ? "3px" : "15px",
            }
        };
        return (
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
                <ul>
                    <li><Link to={`/`}>首页</Link></li>
                    <li><Link to={`/details`}>嵌套的详情页</Link></li>
                    <li><Link to={`/list/1234`}>列表页面</Link></li>
                </ul>
            </header>
        )
    }
}