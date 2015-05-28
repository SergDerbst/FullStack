'use strict';

module.exports = {
    fsContentEditor: function(angular) {
        angular.module('fsCms').directive('fsContentEditor', [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'partials/cms/editor',
                    replace: true,
                    controller: 'ContentEditorController'
                };
            }
        ]);
    }
};