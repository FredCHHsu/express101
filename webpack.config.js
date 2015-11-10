var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        'demo': ['./assets/main.js','webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8081']
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath: "http://localhost:8081/assets/"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [node_modules_dir],
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
module.exports = config;


//var path = require('path');
//
//
//var config = {
//    entry: ['webpack/hot/dev-server',
//            path.resolve(__dirname, 'assets/main.js')],
//    output: {
//        path: path.resolve(__dirname, 'build'),
//        filename: 'bundle.js',
//    },
//    module: {
//        loaders: [
//        {
//            test: /\.jsx?$/,
//            exclude: /node_modules/,
//            loaders: ['babel'],
//        }
//        ]
//    }
//};
//
//module.exports = config;