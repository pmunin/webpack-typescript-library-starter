//from here: https://www.threatstack.com/blog/unit-testing-with-webpack-mocha

const webpack = require('webpack');
const base = require('./webpack.config.base');
const path = require('path');
const args = require('yargs').argv
const WebpackShellPlugin = require('webpack-shell-plugin');
var nodeExternals = require('webpack-node-externals');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = args.env; // use --env with webpack 2
const watchFlag = (args.watch || args.w);
console.warn("Watch flag:", watchFlag);

/**
 * @type {webpack.Configuration}
 */
let config = base.createConfiguration({
  entry: {
    index: path.resolve("src/index.test.js"),
  },
  output: {
    path: path.resolve("lib/mocha-tests"),
    filename: "[name].js",
    //library: "index"
    //libraryTarget:"this",
  },
  target: "node",
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },
  mode: "development",
  devtool: "inline-source-map",
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        node_modules: {
          test: /node_modules/,
          chunks: "all",
          name: "node_modules",
          priority: 10,
          enforce: true,
          minChunks: 1,
          minSize: 0,
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
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: [
        "mocha lib/mocha-tests/index.js --colors" + (watchFlag ? " --watch" : ""),
      ],
    })
  ]
})

module.exports = config;
