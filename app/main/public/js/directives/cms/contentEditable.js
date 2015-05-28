'use strict';

module.exports = {
    fsContentEditable: function(angular) {
        angular.module('fsCms').directive('fsContentEditable', [
            '$rootScope',
            function ($rootScope) {
                return {
                    restrict: 'A',
                    templateUrl: 'partials/cms/trigger',
                    link: function (scope, elem, attrs) {
                        elem.on('mouseup', function () {
                            $rootScope.$broadcast('cmsTrigger', {
                                id: attrs.id,
                                containerEl: elem
                            });
                        });
                    }
                };
            }
        ]);
    }
};