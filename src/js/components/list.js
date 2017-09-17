/*
* @Author: ThinkPad
* @Date:   2017-09-14 15:47:43
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-15 22:02:08
*/

import React from 'react';
export default class ComponentList extends React.Component{
    render(){
        return(
            <div>
                <h2>这里是列表页面 ID:{this.props.params.id}</h2>
            </div>
        );
    };
}
