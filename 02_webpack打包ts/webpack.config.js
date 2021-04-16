const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'js/built[contenthash:10].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          // title: 'hello fang',
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    mode: 'development',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true,
      hot: true
    }
}