import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  devServer: {
    port: 9000
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'cheap-module-source-map'
}

export default config
