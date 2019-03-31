const path = require("path");
const webpack = require('webpack'); // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装 打包html的插件 不需要手动引入路径
const  ExtractTextPlugin = require("extract-text-webpack-plugin");   //打包css的插件 如果不能用更新至最新版本 在后面加上 @next

const config = {
    mode: 'production',  //development || production  两种模式
    entry:{
        main:path.resolve(__dirname + "/src/main.js"), //入口
    },
    output:{
        path:path.resolve(__dirname , "./dist"), //出口dist文件夹下
        // filename:'bundle.js'
        filename:'[name].js?[chunkhash:5]',
        chunkFilename:'[name].js?-[chunkhash:5]'
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
            },
            { //安装css
                test:/\.css$/,
                // use:["style-loader" , "css-loader"]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", 
                    use: ["css-loader"],
                    // options:{
                    //     minimize: true //css压缩
                    // }
                })
                // use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
                // fallback:是指编译失败后用什么loader来提取css文件
                // publicfile:用来覆盖项目路径,生成该css文件的文件路径
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//将出口配置模板html 需要webpack编译一下
            // chunks:['./dist/js'],
            filename:"./index.html", //上面已经配置出口文件以及是dist文件夹下 所以自己写文件
            template: './index.html', //引用的是哪个模板
            title:"webapck模板",
            showErrors: true,
            favicon:"",
            hash:true, //生成的 html 文件的 script 标签内引用的 js 文件后跟着一串哈希值
            minify: { //压缩文件
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        // new ExtractTextPlugin("style.css"), 
        new ExtractTextPlugin({
            //这里关键至极,filename:[name].[contenthash:5].css;之前我们项目是这样写的，这样写，打包出来的css就跑到dist/js里面去了， 必须用contenthash
            // 虽然不影响使用，但是混到一起就是很不舒服，
            //这里你们非常有必要先试试，filename:[name].[contenthash:5].css
            //还有就是最外层建一个 css文件夹  ，然后这样配置filename:css/[name].[contenthash:5].css,然后看看具体打包出什么，
            filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
			disable: false,
			allChunks: true
        }),

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