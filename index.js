var loaderUtils = require('loader-utils');

module.exports = function (content) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.getOptions(this);
  var config = Object.assign({}, defaults, query);
  var singleLinePattern = `\\/\\/\\s*${config.match}\\s*(.*?)\\s*`;
  var multiLinePattern = `\\/\\*\\s*${config.match}\\s*([\\s\\S]*?)\\s*\\*\\/`;

  if (config.enable) {
    content = content.replace(new RegExp(singleLinePattern, 'gi'), '$1');
    content = content.replace(new RegExp(multiLinePattern, 'gim'), '$1');  
  }
  
  return content;
};

var defaults = {
  match: '@[\\w-]+@',
  enable: true
};