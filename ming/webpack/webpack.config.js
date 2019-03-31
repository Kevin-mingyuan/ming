//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports={
    entry:__dirname + "/main.js",
    output:{
        path:__dirname + "/dist",
        filename:"bundle.js"
            
	},
	devServer:{
		host: 'localhost', //可选，ip
		port: 3000, //可选，端口
		// contentBase:path.resolve(__dirname,'/dist'), //可选，基本目录结构
		compress: true, //可选，压缩
		proxy: {
			'/api': {
				target: 'http://localhost:8081',
				pathRewrite: {'^/api': '/data'} //本来是反向代理去http://localhost:8081/api，rewrite之后就反向代理去http://localhost:8081/data
			}
		}
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/, //处理除了node_modules里面的文件
				loader:'babel-loader' //用babel-loader处理
			}
		]
		
	}
}