'use stricts';

module.exports = {
    fsHeader: function (angular) {
        angular.module('directives').directive('fsHeader', [function () {
            return {
                replace: false,
                restrict: 'E',
                templateUrl: 'partials/layout/header'
            };
        }])
    }
};