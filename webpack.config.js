const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/entry.js',
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader?name=/dist/images/[name].[ext]',
          options: {
            name: '[name].[ext]',
            outputPath: 'images'
          }
        }]

      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StyleLintPlugin({
      files: ['./src/styles/**/*.css', './src/styles/**/*.scss']
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

// candidate-renato-melo
