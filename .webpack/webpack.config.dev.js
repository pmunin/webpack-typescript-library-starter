// Used by npm dev script

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
//const CleanWebpackPlugin = require('clean-webpack-plugin');

var process = require('process');
const pkg = require('../package.json');

let libraryName = pkg.name;

function _with(obj, objEditFunc) {
  objEditFunc(obj);
  return obj;
}

/**
 * @type {webpack.Configuration}
 */
let config = {
  entry: {
    [libraryName]: path.resolve('src/index.js'),
  },
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: path.resolve('lib/dev'),
    filename: "[name].js",
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: '(typeof global!=="undefined"?global:window)'
  },
  module: {
    rules: [{
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
    modules: [path.resolve('node_modules'), path.resolve('src')],
    extensions: ['.json', '.js', '.jsx']
  },
  //plugins: plugins,
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: { //to move shared code from different entries to shared chunk from here https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points
        node_modules: {
          test: /node_modules/,
          chunks: "initial",
          name: "node_modules",
          priority: 10,
          enforce: true,
          minChunks:1,
          minSize:0
        }
      },
    },
    occurrenceOrder: true,
    namedModules: true,
    namedChunks: true,
    
    removeAvailableModules: true,
    mergeDuplicateChunks: true,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
    //includeTest? {chunks:'all'}:false,
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //          name: 'manifest'
    //   })
    //new webpack.HashedModuleIdsPlugin()
  ]
};


module.exports = config;
