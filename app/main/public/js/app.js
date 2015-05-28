'use strict';

var angular = require('angular'),
    ngResource = require('angular-resource'),
    moduleInitializer = require('./moduleInitializer'),
    cms = angular.module('fsCms', ['ngResource']),
    app = angular.module('app', ['fsCms']);

//initialize modules
moduleInitializer.init(angular);

module.exports = app;