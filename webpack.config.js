const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
//  favicon: path.resolve(__dirname, './src/assets/Lambda_Potato-removebg-preview.co'),
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
      publicPath: '/',
      directory: path.join(__dirname, 'build'),
    },
    host: '0.0.0.0',
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/**':{
        target: `https://lambdapeeler-675999984030.herokuapp.com/dashboard`,
        secure: false
      }
    },
  },

  //sdsd
  
  plugins: [
    new HtmlWebPackPlugin({
      favicon: path.resolve(__dirname, './src/assets/Lambda_Potato-removebg-preview.ico'),
      template: './src/index.html'

    })
  ]
};