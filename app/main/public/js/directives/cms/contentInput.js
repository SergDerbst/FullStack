'use strict';

module.exports = {
    fsCmsContentInput: function(angular) {
        angular.module('fsCms').directive('fsCmsContentInput', [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'partials/cms/contentInput',
                    replace: true,
                    link: function () {

                    }
                };
            }
        ]);
    }
};