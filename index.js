/*  dsv-loader: a dsv loader for webpack
    built using dsv by Mike Bostock */

var loaderUtils = require('loader-utils');
var dsv = require('dsv');

module.exports = function(text) {
  var query = loaderUtils.parseQuery(this.query);
  var delimiter = query.delimiter || ',';
  var parser = dsv(delimiter);

  if ( query.raw ) {
      var res = parser.parseRows(text);
  } else {
      var res = parser.parse(text);
  }

  return 'module.exports = ' + JSON.stringify(res);
}
