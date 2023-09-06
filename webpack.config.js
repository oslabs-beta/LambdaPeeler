const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$|jsx/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
resolve: {
  extensions: ['.js', '.jsx', '.scss', '.css', '.gif'],
},

plugins: [htmlPlugin]
};