'use strict';

module.exports = {
    fsContentEditable: function(angular) {
        angular.module('directives').directive('fsContentEditable', [function() {
            return {
                restrict: 'A',
                templateUrl: 'partials/cms/editor',
                link: function(scope, elem, attrs) {
                    scope.editable = {
                        id: attrs.id,
                        type: attrs.fsContentEditable
                    };
                }
            };
        }]);
    }
};