
require('es6-promise').polyfill()

var path = require('path');
var webpack = require('webpack');

var BASEPATH = __dirname + "/app";


module.exports = {
  context: BASEPATH,
  entry: {
    home: "./base/home.jsx"
  },

  output: {
      path: BASEPATH + "/static/compiled",
      filename: '_[name].js' // 'bundle.js',
  },

  module: {
    noParse: [/aws\-sdk/],
    loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
        },
        {
           test: /.scss?$/,
           loaders: [ 'style', 'css', 'sass' ]
        },
        {
           test: /\.html$/,
           loader: "file?name=[name].[ext]",
        }
    ]
  },
};
