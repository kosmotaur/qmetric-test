import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  devServer: {
    port: 9000
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

export default config
