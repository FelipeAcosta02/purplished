const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireCssModules = require('react-app-rewire-css-modules');


module.exports = function override(config, env) {

  // Config for react-pdf
  const reactPDFRule = {
    test: /(pdfkit|linebreak|fontkit|unicode|brotli|png-js).*\.js$/,
    loader: 'transform-loader?brfs',
  }
  config.module.rules = [...config.module.rules, reactPDFRule]
  // end of config for react-pdf

    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({modifyVars: { "@primary-color": "#722ED1" },})(config, env);
    config = rewireCssModules(config, env);  

  return config;
};