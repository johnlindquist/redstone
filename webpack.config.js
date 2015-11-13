var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.js']
  },

  plugins: [
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  entry: './src/main.ts',
  output: {
    path: "./dist",
    publicPath: 'dist/',
    filename: "bundle.js"
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: true
  }
};