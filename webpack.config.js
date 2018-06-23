const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';
var APP_DIR = path.resolve(__dirname, 'src/');
module.exports = {
  entry: APP_DIR + '/index.js',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: process.env.IP,
    https: true,
    port: process.env.PORT,
    "public": "app.c9users.io" //no trailing slash
    },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
    publicPath: 'http://localhost:7700/dist',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  },
  plugins: [],
};
