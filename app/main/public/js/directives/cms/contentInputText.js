'use strict';

module.exports = {
    fsCmsContentInputText: function(angular) {
        angular.module('fsCms').directive('fsCmsContentInputText', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'partials/cms/contentInputText',
                controller: function ($scope) {
                    if ($scope.content) {
                        $scope.current = $scope.content[0];
                    }
                },
                link: function (scope) {

                }
            };
        });
    }
};