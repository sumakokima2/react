require('@babel/register'); // development.jsでES6を使えるようにする

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = 
 (env, args) => {
    return {
    mode: 'development',
    entry: src + '/props.jsx', //ここを変える index.jsx: 3-1,3-2
  //props.jsx: 3-4 Props
    output: {
      path: dist,
      filename: 'bundle.js'
    },
  
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
  
    resolve: {
      extensions: ['.js', '.jsx']
    },
  
    plugins: [
        new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })]
};
 };