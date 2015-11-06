// var path = require('path');
// var webpack = require('webpack');

// var config = {
//   entry: {
//     'demo': [ './assets/dev-main.js',
//               'webpack/hot/dev-server',
//               'webpack-dev-server/client?http://localhost:8081']
//   },
//   output: {
//     path: __dirname,
//     filename: 'bundle.js',
//     publicPath: "./assets/"
//   },
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       exclude: path.resolve(__dirname, 'node_modules'),
//       loaders: ['react-hot-loader', 'babel']
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ]
// };

// module.exports = config;
var path = require('path');


var config = {
    entry: ['webpack/hot/dev-server',
            path.resolve(__dirname, 'assets/dev-main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
        // {
        //     test: /\.jsx?$/,
        //     loaders: ['babel-loader']
        // },
        { 
            test: /\.jsx?$/,
            exclude: /node_modules/, 
            loaders: ['babel-loader'],
            // query:
            // {
            //     presets:['react']
            // }
        }
        ]
    }
};

module.exports = config;