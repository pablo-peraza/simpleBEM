const path = require("path");
const SassLintPlugin = require("sass-lint-webpack");

module.exports = {
  entry: "./src/index.scss",
  output: {
    filename: "simplebem.css",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "sass-loader",
      ],
    }],
  },
  plugins: [
    new SassLintPlugin(),
  ],
};
