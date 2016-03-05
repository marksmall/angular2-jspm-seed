'use strict';

var gutil = require('gulp-util');

var printResults = [{
  name: 'Edinburgh'
}];

exports.print = function(req, res) {
  gutil.log(gutil.colors.green('Print: ', JSON.stringify(req.body.printOptions)));
  res.json(printResults);
};
