var tmx = require('tmx-parser');
var _   = require('lodash');
var loaderUtils = require('loader-utils');

module.exports = function(text) {
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);
  var grid = [];

  tmx.parse(text, query.tilepath, function(err, map) {
    if(err) return callback(err);

    var width = map.width;
    var height = map.height;

    _.each(map.layers, function(layer) {
      if (layer.name == "map") {
        for (var x = 0; x < width; x++) {
          grid.push([]);
	  for (var y = 0; y < height; y++) {
            grid[x].push(layer.tileAt(x,y).gid);
	  }
        }
      } else {
      }
    });
    callback(null, 'module.exports = ' + JSON.stringify(grid));
  });
};
