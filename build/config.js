/**
 * @Author: vickiWu
 * @Date: 2022-03-23 18:25:33
 * @LastEditTime: 2022-03-23 18:25:33
 * @LastEditors: vickiWu
 * @Description: 
 * @FilePath: \wwy-map\build\config.js
 */
var path = require('path');

//js忽略路径
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'me-ui': path.resolve(__dirname, '../'),
};
