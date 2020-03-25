const webpack = require('webpack');
const path = require('path');
const {
     CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
     entry: './src/assets/js/app.js',
     output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js'
     },
     module: {
          rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                         loader: 'babel-loader'
                    }
               },
               {
                    test: /\.html$/,
                    use: [
                         'html-loader'
                    ]
               },
               {
                    test: /\.s[ac]ss$/i,
                    use: [
                         MiniCssExtractPlugin.loader,
                         'css-loader',
                         'sass-loader',
                    ],
               },
               {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                         'file-loader',
                         {
                              loader: 'image-webpack-loader'
                         }
                    ],
               },
               {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: {
                         loader: 'file-loader',
                         options: {
                              name: 'fonts/[name].[ext]',
                         },
                    },

               },
          ]
     },
     plugins: [
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin(),
          new HtmlWebpackPlugin({
               template: 'index.html',
               filename: 'index.html'
          })
     ],
     devServer: {
          writeToDisk: true,
          port: 9000
     }
};