'use strict';

module.exports = {
    fsCmsContentInputVideo: function(angular) {
        angular.module('fsCms').directive('fsCmsContentInputVideo', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'partials/cms/contentInputVideo'
            };
        });
    }
};