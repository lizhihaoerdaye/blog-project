const {
    override,
    addWebpackModuleRule
  } = require("customize-cra");
  
  module.exports = override(
    override(
      addWebpackModuleRule({ test: /\.md$/, use: 'raw-loader' })
    )
  );