import { outputPath } from './paths';

module.exports = {
  contentBase: outputPath,
  disableHostCheck: true,
  historyApiFallback: true,
  hot: true,
  host: 'localhost',
  open: true,
  overlay: true,
  port: 3000,
};
