const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: {
    "react-sigma-v2": ["./src/index.ts", "./src/assets/index.scss"],
    "react-sigma-v2.min": "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "./lib/umd"),
    filename: "[name].js",
    library: "react-sigma-v2",
    libraryTarget: "umd",
    globalObject: "this",
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader",
        options: {
          noquotes: true,
        },
      },
    ],
  },
  externals: {
    sigma: "sigma",
    graphology: "graphology",
    "graphology-layout-forceatlas2": "graphology-layout-forceatlas2",
    react: "react",
    "react-dom": "react-dom",
  },
};
