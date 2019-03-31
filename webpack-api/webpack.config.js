const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
    mode: 'production',  //development || production  两种模式
    entry:{
        main:path.resolve(__dirname + "/src/main.js"), //入口
    },
    output:{
        path:path.resolve(__dirname , "./dist"), //出口dist文件夹下
        filename:'bundle.js'
    },
    module:{ //转换模块
        rules:[
            {
                test: /\.js$/, //加载js
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{  //使用es5
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//将出口配置模板html 需要webpack编译一下
            template: './index.html', //引用的是哪个模板
            title:"webapck模板",
            filename:"./index.html", //上面配置出口文件以及是dist文件夹下 所以自己写文件
            showErrors: true,
            favicon:"",
            hash:true, //生成的 html 文件的 script 标签内引用的 js 文件后跟着一串哈希值
            minify: { //压缩文件
                removeAttributeQuotes: true // 移除属性的引号
            }
        }) 
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'), //访问html 默认路径是根目录
        compress: true,
        open:true,//打开浏览器
        // hot:true,//热更新
        port: 9000
      }
}
module.exports = config;