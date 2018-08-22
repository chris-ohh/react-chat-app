var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: ['./public/index.js'],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.(js|jsx)$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['react']
                 }
             },
             {
                 test: /\.css$/,
                 include: /node_modules/,
                 use: ['style-loader', 'css-loader'],
             }
         ]
     },
     resolve: {
       extensions: ['.js', '.jsx', '.css', '.es6'],
     },
     stats: {
         colors: true
     },
     devtool: 'inline-source-map'
 };
