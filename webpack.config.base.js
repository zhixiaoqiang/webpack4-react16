const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      constants: path.join(__dirname, 'src/constants'),
      store: path.join(__dirname, 'src/store'),
      model: path.join(__dirname, 'src/model'),
      utils: path.join(__dirname, 'src/utils'),
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'), //  限制范围，提高打包速度
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     '@babel/preset-env',
            //     "@babel/preset-react"
            //   ],
            //   plugins: [
            //     "@babel/plugin-transform-runtime",
            //     ["import", {
            //       "libraryName": "antd",
            //       "libraryDirectory": "es",
            //       "style": "css"
            //     }]
            //   ],
            //   cacheDirectory: true
            // }
          }
        ]
      },
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
    new webpack.HashedModuleIdsPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  watchOptions: {
    //   ignored: /node_modules/, // 忽略不用监听变更的目录
    aggregateTimeout: 1000, // 防止重复保存频繁重新编译,500毫秒内重复保存不打包
    //   poll: 1000 // 每秒询问的文件变更的次数
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production' ? true : false, // 开发环境不压缩
    runtimeChunk: 'single',
    splitChunks: {
      chunks: "async", // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
      minSize: 30000, // 模块超过30k自动被抽离成公共模块
      minChunks: 1, // 模块被引用>=1次，便分割
      maxAsyncRequests: 5,  // 异步加载chunk的并发请求数量<=5
      maxInitialRequests: 3, // 一个入口并发加载的chunk数量<=3
      name: true, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
      automaticNameDelimiter: '~', // 命名分隔符
      cacheGroups: { // 缓存组，会继承和覆盖splitChunks的配置
          default: { // 模块缓存规则，设置为false，默认缓存组将禁用
              minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
              priority: -20, // 优先级
              reuseExistingChunk: true, // 默认使用已有的模块
          },
          vendors: {
            name: 'vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/, // 表示默认拆分node_modules中的模块
            priority: -10
          }
      }
    }
  }
}