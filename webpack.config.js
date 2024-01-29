const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  mode: NODE_ENV,
  target: "node",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  plugins: [new NodemonPlugin()],
  externals: [nodeExternals()],
};
