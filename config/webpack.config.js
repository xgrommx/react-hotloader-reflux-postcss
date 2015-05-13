var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var cssConfig = require('./css.config');

// postcss plugins
var autoprefixer = require('autoprefixer-core');
var BEMLinter = require('postcss-bem-linter');
var colorFunction = require('postcss-color-function');
var customProps = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/web_modules/index'
  ],

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/bundle.js',
    publicPath: '/assets'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/bundle.css')
  ],

  postcss: [
    BEMLinter(),
    customMedia(cssConfig.customMedia),
    customProps(cssConfig.customProperties),
    colorFunction(),
    autoprefixer(cssConfig.autoprefixer).postcss
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '../src')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }]
  }
};
