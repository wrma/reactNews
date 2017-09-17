/*
* @Author: ThinkPad
* @Date:   2017-09-07 09:22:34
* @Last Modified by:   ThinkPad
* @Last Modified time: 2017-09-15 10:09:30
*/
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context : __dirname + '/src',
    entry : './js/root.js',
    output : {
        filename : 'bundle.js',
        path : __dirname + '/dist/',
        publicPath: '/dist/'
    },
    module : {
        loaders : [{
            test: /\.js?$/,
            exclude : /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets:['react','es2015'],
                plugins:['react-html-attrs'],
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }

}