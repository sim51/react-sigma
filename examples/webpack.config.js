const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const EXAMPLES = {
  complete: {
    id: "complete",
    title: "A realistic example",
  },
  multiple: {
    id: "multiple",
    title: "Multiple graphs",
  },
  customBtn: {
    id: "custom-buttons",
    title: "Customize buttons",
  },
  events: {
    id: "events",
    title: "Events",
  },
};

const entry = {};

const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    title: "React Sigma.js - Examples",
    template: "./templates/index.ejs",
    pages: Object.keys(EXAMPLES).map(key => EXAMPLES[key]),
    chunks: [],
  }),
];

for (const key in EXAMPLES) {
  const example = EXAMPLES[key];
  entry[key] = `./${example.id}.tsx`;
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${example.id}.html`,
      title: `Example - ${example.title}`,
      chunks: ["commons", key],
      template: "./templates/default.ejs",
    }),
  );
}

module.exports = {
  mode: "development",
  context: __dirname,
  entry,
  output: {
    path: path.resolve(__dirname, "../docs/examples"),
    filename: "[name].js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
  devServer: {
    contentBase: "./",
  },
};
