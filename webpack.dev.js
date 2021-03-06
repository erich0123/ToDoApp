const path = require("path");

const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = () =>
  merge(common("development"), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      hot: true,
      historyApiFallback: true,
      proxy: {
        "/api": "http://localhost:3000",
      },
    },
  });
