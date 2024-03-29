const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.js")
  },

  output: {
    path: path.join(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader?name=/[hash].[ext]"
        }
      },

      {
        test: /\.json$/, 
        use: {
          loader: "json-loader"
        }
      },

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            cacheDirectory: true
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          { 
            loader: 'css-loader',
            options: {
              url: false
            }
          }, 
          "postcss-loader", 
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true,
      removeFullPathAutoPrefix: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/fonts/",
          to: "[name][ext]",
        }
      ]
    })
  ]
};
