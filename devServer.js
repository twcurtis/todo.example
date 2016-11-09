const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const port = 8080;
const ip = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { colors: true },
  hot: true,
  quiet: false,
  noInfo: false,
  contentBase: 'build/',
  inline: true
}).listen(port, ip, (err) => {
  console.log('Starting dev server at ' + ip + ':' + port + ', wait one moment.');
});
