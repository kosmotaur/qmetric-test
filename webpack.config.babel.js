import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  devServer: {
    port: 9000
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin()
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
  }
}

export default config
