'use strict';

let gutil = require('gulp-util');

let printResults = [{
  name: 'Edinburgh'
}];

let print = (req, res) =>{
  gutil.log(gutil.colors.green('Print: ', JSON.stringify(req.body.printOptions)));
  res.json(printResults);
};

export default {
  print
};
