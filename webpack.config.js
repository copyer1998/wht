const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const Cleanwebpackplugin = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        home: './src/home.js',
        print:'./src/print.js'
    },
    devtool: "inline-source-map",
    plugins: [
      // new Cleanwebpackplugin(),
      // new Htmlwebpackplugin({
      //     title: "Webpack App"
      // })
    ],
    output: {
        filename: "[name].[contenthash].js",
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}