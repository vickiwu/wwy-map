/**
 * @Author: vickiWu
 * @Date: 2022-03-23 14:37:51
 * @LastEditTime: 2022-03-23 17:56:42
 * @LastEditors: vickiWu
 * @Description: 
 * @FilePath: \wwy-map\build\webpack.config.js
 */
const path = require("path");
//  require("vue-loader/lib/plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./examples/main.js",
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
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
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule: false  //“[object Module]”问题
                        },
                    },
                ],
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
    }),new ESLintPlugin({
      fix:true, // 自动修复
      extensions: ['js','vue']
    })],
};
