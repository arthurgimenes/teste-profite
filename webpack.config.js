const path = require('path');
const webpack = require('webpack');
const bourbonPath = require('bourbon').includePaths;
const neatPath = require('bourbon-neat').includePaths;
const normalizePath = path.join(__dirname, 'node_modules/normalize.css');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [normalizePath].concat(neatPath).concat(bourbonPath)
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true
  },
}
