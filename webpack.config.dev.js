const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.base.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 启用gzip压缩
    historyApiFallback: true, // 找不到路由的全到index.html
    hot: true,
    port: 9000,
    inline: true,
    filename: 'index.bundle.js',
    // stats: {
    //   performance: true,
    //   timings: true
    // },
    proxy: {
      '/api': 'http://localhost:3000',
      '/api2': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
  }
})