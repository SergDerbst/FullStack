'use strict';

module.exports = {
    fsHeader: function (angular) {
        angular.module('fsCms').directive('fsHeader', [function () {
            return {
                replace: false,
                restrict: 'E',
                templateUrl: 'partials/layout/header'
            };
        }]);
    }
};