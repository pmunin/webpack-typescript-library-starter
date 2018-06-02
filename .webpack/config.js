//const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

 var process = require('process');
 //process.chdir('../')
//__dirname = __dirname+"/../";
const pkg = require('../package.json');




let libraryName = pkg.name;

let plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({}));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

/**
 * @type {webpack.Configuration}
 */
const config = {
  //context: path.resolve('src'),
  //entry: './index.js',
  entry: path.resolve('src/index.js'),
  devtool: 'source-map',
  mode: env=='build'? 'production':'development',
  output: {
    path: path.resolve('lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject:'(typeof global!=="undefined"?global:window)'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('node_modules')
    , path.resolve('src')
  ],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
