module.exports={
    entry:__dirname + '/src/index.js',
    output:{
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{
                    presets: ['es2015']
                }
            }
        ]
    }
}
