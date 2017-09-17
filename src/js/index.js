/*@Author: ThinkPad
* @Date:   2017-09-06 17:08:44
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-15 11:41:35
*/

var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header.js';
import BodyIndex from './components/bodyindex.js';
import ComponentFooter from './components/footer.js';

import 'antd/dist/antd.css';

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <ComponentHeader />
                <BodyIndex userid={2} username={'wrma'}/>
                <div>
                    {this.props.children}
                </div>
                <ComponentFooter />
            </div>
        );
    }
}

// 入口定义
// ReactDOM.render(<Index/>,document.getElementById('example'));

