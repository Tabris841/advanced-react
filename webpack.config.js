const path = require('path');

const config = {
  entry: ['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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
      use: 'babel-loader'
    }]
  }
};

module.exports = config;