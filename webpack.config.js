const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const OUT_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: path.resolve(OUT_DIR),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  devtool: 'source-map',
};
