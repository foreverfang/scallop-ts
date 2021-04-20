const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'js/built[contenthash:10].js',
        path: path.resolve(__dirname, 'dist'),
        // 关闭webpack 箭头函数
        environment: {
          arrowFunction: false,
          const: false // 兼容ie10
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      // 设置预定义的环境
                      presets: [
                        [
                          // 指定环境插件
                          '@babel/preset-env',
                          // 配置信息
                          {
                            // 要兼容的目标浏览器
                            targets: {
                              chrome: '66',
                              ie: '11'
                            },
                            // 指定corejs版本
                            corejs: '3',
                            // 使用corejs的方式 'usage' 表示按需加载
                            useBuiltIns: 'usage'
                          }
                        ]
                      ]
                    }
                  },
                  'ts-loader']
            },
            {
              test: /\.less$/,
              use: [
                'style-loader',
                'css-loader',
                // 引入postcss
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "postcss-preset-env",
                          {
                            browsers: 'last 2 versions'
                          }
                        ]
                      ]
                    }
                  }
                },
                'less-loader'
              ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          // title: 'hello fang',
            template: './src/index.html',
        })
    ],
    mode: 'production',
    // npx webpack serve 启动devServer
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true,
      hot: true
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
}