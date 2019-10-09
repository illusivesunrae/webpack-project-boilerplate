const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const banner = pkg.name + ` - @version ` + pkg.version + `

Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause`;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Component'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};