const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 启用gzip压缩
    historyApiFallback: true, // 找不到路由的全到index.html
    hot: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.join(__dirname, 'src/components'),
      store: path.join(__dirname, 'src/store'),
      model: path.join(__dirname, 'src/model'),
      utils: path.join(__dirname, 'src/utils'),
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack4-react16',
      hash: true,
      template: path.join(__dirname, 'template.html'),
      minify: {
        // removeAttributeQuotes: true,
        keepClosingSlash: true, // 保留单例元素尾斜杠
        // collapseWhitespace: true, // 去除标签间空间
        // conservativeCollapse: true, // 保留标签间一个空格
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
}