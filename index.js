var tmx = require('tmx-parser');
var _   = require('lodash');
var loaderUtils = require('loader-utils');
var path = require("path");

module.exports = function(text) {
<<<<<<< HEAD
    var callback = this.async();
    var query = loaderUtils.parseQuery(this.query);
    var grids = {};

    tmx.parse(text, path.resolve(query.tilepath), function(err, map) {
        if(err) return callback(err);

        var width = map.width;
        var height = map.height;

        _.each(map.layers, function(layer) {
            grids[layer.name] = [];

            if (layer.type == "tile") {
                for (var x = 0; x < width; x++) {
                    grids[layer.name].push([]);

                    for (var y = 0; y < height; y++) {
                        var tile = layer.tileAt(x,y);

                        if (tile) {
                            grids[layer.name][x].push(tile.gid);
                        } else {
                            grids[layer.name][x].push(undefined);
                        }
                    }
                }
            }
            if (layer.type == "object") {
            }

        });

        callback(null, 'module.exports = ' + JSON.stringify(grids));
    });
=======
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);
  var grids = {};

  tmx.parse(text, path.resolve(query.tilepath), function(err, map) {
    if(err) return callback(err);

    var width = map.width;
    var height = map.height;

    _.each(map.layers, function(layer) {
      grids[layer.name] = [];

      for (var x = 0; x < width; x++) {
        grids[layer.name].push([]);
	for (var y = 0; y < height; y++) {
          var tile = layer.tileAt(x,y);

          if (tile) {
            grids[layer.name][x].push(tile.gid);
          } else {
            grids[layer.name][x].push(undefined);
          }
	}
      }
    });

    callback(null, 'module.exports = ' + JSON.stringify(grids));
  });
>>>>>>> 6ec4592cc6b3cc5cf97554bee7999533cec477bf
};
