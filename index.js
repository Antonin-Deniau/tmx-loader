var loaderUtils = require('loader-utils');
var tmx = require('tmx-parser');

module.exports = function(text) {
  //var query = loaderUtils.parseQuery(this.query);

  tmx.parse(text, "", function(err, map) {
    if (err) throw err;
    console.log(map);
    var res = map;
  });

  return 'module.exports = ' + JSON.stringify(res);
}
