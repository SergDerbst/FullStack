'use strict';

module.exports = {
    ContentEditorController: function(angular) {
        angular.module('controllers').controller('ContentEditorController', [
            '$scope',
            'cmsResource',
            function ($scope, cmsResource) {
                //when
                $scope.$on('cmsTrigger', function(event, data) {
                    $scope.header = data;
                    cmsResource.fetch({
                            id: $scope.header.id
                        }, function(response) {
                            $scope.content = response.content;
                        }
                    );
                });
            }
        ]);
    } 
};