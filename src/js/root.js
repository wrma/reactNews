/*
* @Author: ThinkPad
* @Date:   2017-09-14 15:41:30
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-15 21:57:29
*/
import React from 'react';
import ReactDOM from 'react-dom';

import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import {Router,Route,hashHistory} from 'react-router';


export default class Root extends React.Component{
    render(){
        return(
            //这里变成了程序入口
            <Router history={hashHistory}>
                <Route component={Index} path="/">
                {/*嵌套页面*/}
                    <Route component={ComponentDetails} path="details"></Route>
                </Route>

                <Route component={ComponentList} path="list/:id"></Route>
            </Router>
        );
    };
}

// 入口定义
ReactDOM.render(<Root/>,document.getElementById('example'));
