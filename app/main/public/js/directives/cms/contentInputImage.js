'use strict';

module.exports = {
    fsCmsContentInputImage: function(angular) {
        angular.module('fsCms').directive('fsCmsContentInputImage', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'partials/cms/contentInputImage'
            };
        });
    }
};