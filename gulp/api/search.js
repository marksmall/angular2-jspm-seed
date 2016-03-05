'use strict';

var gutil = require('gulp-util');

var noResults = [];

var singleResult = [{
  name: 'EH9 1PR',
  zoomLevel: 16,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}];

var multipleResults = [{
  name: 'Edinburgh',
  zoomLevel: 16,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}, {
  name: 'London',
  zoomLevel: 16,
  point: {
    x: 51.5073509,
    y: -0.1277583
  }
}, {
  name: 'Caisteal Dhùn Èideann',
  zoomLevel: 18,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}];

exports.getResults = function(req, res) {
  gutil.log(gutil.colors.green('Search: ', req.query.search));
  if (req.query.search === 'zero') {
    res.json(noResults);
  } else if (req.query.search === 'EH9 1PR') {
    res.json(singleResult);
  } else {
    res.json(multipleResults);
  }
};
