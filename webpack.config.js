const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, 'app/src/ant-theme-vars.less'), 'utf8'));

module.exports = {
  watch: true,
  target: 'electron',
  entry: './app/src/main',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["react", "es2015"],
            plugins: [
           ['import', {
             libraryName: 'antd',
             style: true,
           }]]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: "style-loader"}, 
          {loader: "css-loader"}, 
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.(less)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader", // compiles Less to CSS
            options: {
              modifyVars: themeVariables
            }
        }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  }
};