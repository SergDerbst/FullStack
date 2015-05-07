'use strict';

var angular = require('angular'),
    ngResource = require('angular-resource'),
    moduleInitializer = require('./moduleInitializer'),

    //angular modules
    services = angular.module('services', ['ngResource']),
    controllers = angular.module('controllers', ['services']),
    directives = angular.module('directives', ['controllers']),

    //app
    app = angular.module('app', ['services', 'controllers', 'directives']);


//initialize modules
moduleInitializer.init(angular);

module.exports = app;