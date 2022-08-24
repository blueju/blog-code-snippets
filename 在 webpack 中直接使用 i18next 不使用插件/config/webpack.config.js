const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./../src/main.js")
  },
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[name].[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./../src/main.html"),
      filename: "main.html",
      chunks: "main"
    })
  ]
};
