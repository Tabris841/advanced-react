const path = require('path');
const webpack = require('webpack');

const config = {
  entry : {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash',
    ],
    app: ['./lib/renderers/dom.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2']
        }
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};

module.exports = config;