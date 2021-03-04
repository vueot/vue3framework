const ProvidePlugin = require("webpack/lib/ProvidePlugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
};
