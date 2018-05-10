// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
// due to webpack hashing issue
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const env = process.env.NODE_ENV

module.exports = (env, argv) => {
  var prod = argv.mode === 'production';
  return {
    entry: { main: './src/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: prod ? '[name].[chunkhash].js' : 'main.js'
    },
    devtool: prod ? '' : 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: {
            loader: 'vue-loader'
          }
        },
      ]
    },
    resolve: {
      alias: {
          vue: prod ? 'vue/dist/vue.min' : 'vue/dist/vue.js',
          $: "jquery",
          jquery: "jQuery",
          "window.jQuery": "jquery"
      },
      extensions: ['*', '.js', '.vue'],
    },
    plugins: [ 
      // new BrowserSyncPlugin({
      //   host: 'localhost',
      //   port: 8000,
      //   proxy: 'http://localhost:8000/',
      // }),
      new MiniCssExtractPlugin({
        filename: prod ? 'style.[contenthash].css' : 'style.css',
      }),
      new WebpackMd5Hash(),
      new WebpackAssetsManifest({
        output: 'assets.json',
        space: 2,
        writeToDisk: false,
        assets: {},
        replacer: require('./format'),
      }),
    ],
    performance: { hints: false }
  }
};