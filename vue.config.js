const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const ProvidePlugin = require("webpack/lib/ProvidePlugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new ProvidePlugin({
        _: 'lodash'
      })
    ],
    resolve: {
      alias: {
        '@c': resolve('src/components'),
        '@v': resolve('src/views'),
      }
    }
  }
};
