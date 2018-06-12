const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /(\.scss|\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
      }),
    }],
  },
  plugins: [
    new HtmlPlugin({
      template: './src/template.html',
      filename: './index.html',
    }),
    new ExtractTextPlugin('style.css'),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
};
