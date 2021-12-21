const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[contenthash:6].js",
    chunkFilename: "[id].[contenthash:6].js"
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions:{ 
          sourceMap: true
        }
      }),

      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:6].css",
        chunkFilename: "[id].[contenthash:6].css"
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
