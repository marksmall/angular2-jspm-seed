'use strict';

var gutil = require('gulp-util');
var express = require('express');
var bodyParser = require('body-parser');
var search = require('./search');
var tools = require('./tools');
var print = require('./print');
var config = require('../../gulpfile.babel.js')

var app = express();
app.use(bodyParser.json());
// to support URL-encoded bodies.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/search', search.getResults);
app.get('/api/tools', tools.getTools);
app.post('/api/print', print.print);

app.listen(config.options.proxy.port);
gutil.log(gutil.colors.green('API Stub listening on port: ' + config.options.proxy.port));
