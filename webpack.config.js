'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    // 'react-hot-loader/patch',
    path.join(__dirname, 'client/src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: 'https://infinite-citadel-61750.herokuapp.com/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loaders: ["style-loader", "css-loader"],
        // include: /flexboxgrid/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }, 
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: ["file-loader?name=[name].[ext]"]
      },
    ],
  },
};

