# Angular 2 JSPM Seed Project

[![NPM version](https://img.shields.io/badge/npm-3.8.6-blue.svg)](https://www.npmjs.com/package/angular2-jspm-seed)
[![Downloads](https://img.shields.io/npm/dm/angular2-jspm-seed.svg)](https://www.npmjs.com/package/angular2-jspm-seed)
[![GitHub issues](https://img.shields.io/github/issues/marksmall/angular2-jspm-seed.svg)](https://github.com/marksmall/angular2-jspm-seed/issues)
[![Build Status](https://travis-ci.org/marksmall/angular2-jspm-seed.svg?branch=master)](https://travis-ci.org/marksmall/angular2-jspm-seed)
[![Dependency Status](https://david-dm.org/marksmall/angular2-jspm-seed.svg)](https://david-dm.org/marksmall/angular2-jspm-seed)
[![devDependency Status](https://david-dm.org/marksmall/angular2-jspm-seed/dev-status.svg)](https://david-dm.org/marksmall/angular2-jspm-seed#info=devDependencies)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/marksmall/angular2-jspm-seed/master/LICENSE.MD)


## About
Created by the ModernWebDev Yeoman Generator, then updated to use replacement Build system and updated dependencies.
This project is intended as a seed project for Angular 2/JSPM applications. It is also used as a test project for the
[node-build-web-app](https://github.com/marksmall/node-build-web-app) Build System. This app bootstraps a new application
and displays messages to the user and in the Browser *Developer Tools*.


## How to build

1. Install required global npm packages: `npm install gulp --global --no-optional`.
1. Install project dependencies using `npm run setup`.

For more details about the build, refer to the [node-build-web-app](https://github.com/marksmall/node-build-web-app)
project documentation.


## Release Process
* commit all changes to include in the release
* edit the version in package.json
  * respect semver
* update CHANGELOG.MD
* commit
* git tag <version>
* git push --tags
* draft the release on GitHub (add description, etc)
* npm publish

## Authors
### Mark Small
* [@GitHub](https://github.com/marksmall)

## License
This project and all associated source code is licensed under the terms of the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
