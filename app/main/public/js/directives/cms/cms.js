'use strict';

module.exports = {
    fsContentEditable: function(angular) {
        angular.module('directives').directive('fsContentEditable', ['$rootScope', function($rootScope) {
            return {
                restrict: 'A',
                templateUrl: 'partials/cms/trigger',
                link: function(scope, elem, attrs) {
                    elem.on('mouseup', function() {
                        $rootScope.$broadcast('cmsTrigger', {
                            id: attrs.id,
                            containerEl: elem
                        });
                    });
                }
            };
        }]);
    },
    fsContentEditor: function(angular) {
        angular.module('directives').directive('fsContentEditor', [
            function() {
                return {
                    restrict: 'E',
                    templateUrl: 'partials/cms/editor',
                    replace: true,
                    controller: 'ContentEditorController'
                }
            }
        ]);
    }
};