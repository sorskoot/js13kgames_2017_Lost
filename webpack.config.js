'use strict';

var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");
const UglifyESPlugin = require('uglifyes-webpack-plugin');

var env = process.env.NODE_ENV || 'development';
var isProduction = env === 'production';

var plugins = [
  new webpack.DefinePlugin({
    'PRODUCTION': isProduction
  })
];

if (isProduction) {
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new UglifyESPlugin({
      compress: { warnings: false },
      output: { comments: false }
    }),
    new webpack.NoErrorsPlugin(),
    new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
		})
  ]);
}

module.exports = {
  devtool: 'source-map',

  entry: {
    app: './src/index'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'b.js'
  },

  plugins: plugins,

  resolve: {
    extensions: ['', '.js', 'json']
  }
};

