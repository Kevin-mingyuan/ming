var path = require("path");
console.log(path)
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

console.log(__dirname);

module.exports = {
    // mode:"production",
    mode: 'development',
    entry:{　　//入口文件
        "app":path.join(__dirname,"../app/main.js")  //app对应生成的文件名   当前的路径 
    },
    output:{
        path:path.join(__dirname,"../static/js/"),
        filename:"[name].js"   //这里[name]就是表示对应entry对象的name，然后生成的后戳是.js
    },

    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,    //这是配置加载文件的规则 值是正则表达式 这里写的意思是.js .jsx结尾的文件加载loader
                loader:"babel-loader",
                exclude:/node_modules/,        //这个目录不需要加载loader
                query:{
                    presets:["es2015","react"]        //加载loader的presets
                }
            }
        ]
    },
    
    plugins: [
        // new BundleAnalyzerPlugin({ analyzerPort: 8919 })
    ],

    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'app'),
        }
      },

    devServer:{
        contentBase: path.join(__dirname, '../static/'), //监听打包后文件夹 自动找寻html文件
        compress: true,
        port: 9000
    }
}