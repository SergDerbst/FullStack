'use strict';

module.exports = {
    ContentEditorController: function(angular) {
        angular.module('fsCms').controller('ContentEditorController', [
            '$scope',
            'contentContainer',
            'contentService',
            function ($scope, container, contentService) {
                $scope.$on('cmsTrigger', function(event, data) {
                    $scope.header = data;
                    contentService.init($scope.header.id);
                });
            }
        ]);
    } 
};