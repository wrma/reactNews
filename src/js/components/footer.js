/*
* @Author: ThinkPad
* @Date:   2017-09-08 10:17:22
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-15 09:54:38
*/
import React from 'react';
import ReactDOM from 'react-dom';

var footerCss = require('../../css/footer.css');

// 子类 export default 给外部使用的组件定义必须加上
export default class ComponentFooter extends React.Component{
    render(){
        console.log(footerCss);
        return (
            <footer class={footerCss.miniFooter}>
                <h1 class={footerCss.miniFooter_h1}>这里是页脚，一般放置一些版权信息</h1>
            </footer>
        )
    }
}