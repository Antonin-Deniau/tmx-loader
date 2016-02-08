# Webpack tmx loader
[![NPM](https://nodei.co/npm/tmx-loader.png)](https://nodei.co/npm/tmx-loader/)

A Webpack plugin for loading tmx files (for example .tmx).

## Installation

Install via npm:

```
npm install --save tmx-loader
```

## Usage

You can require tmx map like this:

``` javascript
var data = require('tmx!./map.tmx');
// => returns map.tmx content as json parsed object
```

The loader will translate the ```map.tmx``` file into a JSON Object.

#### Usage with webpack.config

To require tmx files like this: ```require('map.tmx')``` , you can add the tmx-loader to your webpack config:

``` javascript
module : {
  loaders : [
    { test: /\.tmx?$/, loader: 'tmx-loader' } //will load all .tmx files with tmx-loader by default
  ]
}
```

#### Options

**tilepath**

Tells the loader which tilemap is used to display the data. *Default: ''*

Examples:
``` javascript
var data = require('tmx?tilepath=./tilemap.tsx!./map.tmx'); //load tilemap
```

## Credits
* TMX parsing done with [node-tmx-parser](https://github.com/andrewrk/node-tmx-parser) by Andrew Kelley
