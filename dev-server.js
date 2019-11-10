import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config, { output } from './webpack.config';
import open from 'open';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const portNumber = 3333;
const targetEntry = `http://localhost:${portNumber}/`;

new WebpackDevServer(webpack(config), {
  stats: { colors: true },
  publicPath: output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: 'dist',
}).listen(portNumber, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Running at ${targetEntry}...`);
  open(targetEntry);
  return;
});
