const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/", 
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

 devServer: {
  static: {
    directory: path.join(__dirname, "public"),
  },
  port: 8080,     
  hot: true,
},

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
