var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
  entry: {
    app: ['webpack/hot/dev-server', './src/index.js'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,  // Match both .js and .jsx files
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.png|\.svg$/,
      loaders: ['file-loader']
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:9000/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    publicPath: 'http://localhost:8080/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
