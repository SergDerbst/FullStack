'use strict';

var angular = require('angular'),
    ngResource = require('angular-resource'),

    //angular modules
    services = angular.module('services', ['ngResource']),
    directives = angular.module('directives', []),
    controllers = angular.module('controllers', ['services']),

    //app
    app = angular.module('app', ['directives', 'controllers']),

    //app module containers
    directivesContainer = require('./directives/directivesContainer');


//initialize the whole shebang
directivesContainer(angular);

module.exports = app;