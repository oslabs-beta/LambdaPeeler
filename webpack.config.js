const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_module/,
        use: ["style-loader", "css-loader"]
      }
    ]},
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.gif', '.ts', '.tsx'],
  },
devServer: {
  host: '0.0.0.0',
  port: 8080,
  hot: true,
  historyApiFallback: true,
  static: {
    publicPath: '/build',
    directory: path.join(__dirname, 'build'),
  },
  header: {'Access-Control-Allow-Origin': '*'},
  proxy: {
    '/api/**':{
      target: 'http://localhost:3000/',
      secure: false,
    }
  },
},
  
  

  plugins: [htmlPlugin]
};