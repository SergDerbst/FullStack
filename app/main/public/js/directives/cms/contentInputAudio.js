'use strict';

module.exports = {
    fsCmsContentInputAudio: function(angular) {
        angular.module('fsCms').directive('fsCmsContentInputAudio', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'partials/cms/contentInputAudio'
            };
        });
    }
};