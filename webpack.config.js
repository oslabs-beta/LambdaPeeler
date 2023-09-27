const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 favicon: path.resolve(__dirname, './src/assets/Lambda_Potato-removebg-preview.png'),
 filename: "./index.html"
});
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
},
    module: {
      rules: [{
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        }
      ]},
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css', '.gif', '.ts', '.tsx'],
    },
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/assets',
      directory: path.join(__dirname, './src/assets'),
    },
  },

  plugins: [htmlPlugin]
};