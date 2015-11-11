var tmx = require('tmx-parser');
var _   = require('lodash');
var loaderUtils = require('loader-utils');
var path = require("path");

module.exports = function(text) {
    this.cacheable();
    var callback = this.async();
    var query = loaderUtils.parseQuery(this.query);
    var grids = {};

    tmx.parse(text, path.resolve(query.tilepath), function(err, map) {
        if(err) return callback(err);

        var width = map.width;
        var height = map.height;

        _.each(map.layers, function(layer) {
            grids[layer.name] = {}
            if (layer.type == "tile") {
                for (var x = 0; x < width; x++) {
                    for (var y = 0; y < height; y++) {
                        var tile = layer.tileAt(x,y);

                        if (tile) {
                            grids[layer.name][x + "," + y] = {
                                gid: tile.gid,
                                properties: tile.properties
                            };
                        } else {
                            grids[layer.name][x + "," + y] = undefined;
                        }
                    }
                }
            }
            if (layer.type == "object") {
                _.each(layer.objects, function(object){
                  console.log(object);
                    grids[layer.name][object.x + "," + object.y] = {
                        name: object.name,
                        type: object.type,
                        gid: object.gid,
                        properties: object.properties
                    };
                });
            }
        });

        callback(null, 'module.exports = ' + JSON.stringify(grids));
    });
};
