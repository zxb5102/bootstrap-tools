const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // entry: ["babel-polyfill", "./src/index.js"],
  entry: ["./src/index.js"],
  plugins: [
    new CleanWebpackPlugin(["dist/*"], {
      //  exclude: [ 'styles.css' ],
    }),
    // new HtmlWebpackPlugin({
    //   template: "src/index.html"
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "./src/others"),
    //     to: path.resolve(__dirname, "dist/others"),
    //     ignore: [".*"]
    //   }
    // ])
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { minimize: true } 
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false,
              plugins: [require('autoprefixer')]
            }
          }
          ,{
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bootstrap-tools.css"),
    // require('precss'),
    // require('autoprefixer')
  ]
};
