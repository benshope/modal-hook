const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};
