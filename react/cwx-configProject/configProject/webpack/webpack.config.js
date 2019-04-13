var path = require("path");

module.exports = {
    
    entry:{　　//入口文件
        "app":path.join(__dirname,"../index.js")  //app对应生成的文件名   当前的路径 
    },
    output:{
        path:path.join(__dirname,"../dist"),
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

    devServer:{
        contentBase: './dist', //监听打包后文件夹 自动找寻html文件
        compress: true,
        port: 9000
    }
}