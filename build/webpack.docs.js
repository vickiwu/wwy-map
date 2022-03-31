/**
 * @Author: vickiWu
 * @Date: 2022-03-23 19:08:00
 * @LastEditTime: 2022-03-23 19:08:01
 * @LastEditors: vickiWu
 * @Description: 
 * @FilePath: \wwy-map\build\webpack.docs.js
 */
const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin")
const config = require("./config")

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./examples/main.js",
  output: {
    path: path.resolve(process.cwd(), "docs"),
    filename: "bundle.js",
  },
  resolve: {
    // 引入模块时不带扩展
    extensions: ['.js', '.vue', '.json'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: config.alias,
    // 解析模块时应该搜索的目录
    modules: ['node_modules'],
  },
  devServer: {
    port: 8886,
    hot: true,
    contentBase: './dist',
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [{
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js'),
          },
        ],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            esModule: false //“[object Module]”问题
          },
        }, ],
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ],
  },
  plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
    title: 'Development',
    favicon: './public/favicon.ico',
    template: 'public/index.html',
    filename: 'index.html',
    inject: true,
  }), new ESLintPlugin({
    fix: true, // 自动修复
    extensions: ['js', 'vue']
  })],
};
