'use strict';

angular.module('services', ['ngResource'])
angular.module('directives', []);
angular.module('controllers', ['services']);

var app = angular.module('app', ['directives', 'controllers']);