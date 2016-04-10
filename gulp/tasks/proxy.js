"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)

import gutil from "gulp-util";
import express from "express";
import bodyParser from "body-parser";
import search from "../api/search";
import tools from "../api/tools";
import print from "../api/print";
import config from "../../gulpfile.babel";

gulp.task("proxy", "Run Proxy API Server", () =>{
  console.log('Starting Proxy API Server!');
  let app = express();
  app.use(bodyParser.json());
  // to support URL-encoded bodies.
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/api/search', search.search);
  app.get('/api/tools', tools.getTools);
  app.post('/api/print', print.print);

  app.listen(config.options.proxy.port);
  gutil.log(gutil.colors.green('API Stub listening on port: ' + config.options.proxy.port));
});
