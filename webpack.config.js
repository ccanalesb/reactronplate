const path = require('path');

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
             style: 'css',
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
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  }
};