'use strict';

var initScope = function(scope) {
    scope.types = [{
        label: 'Audio',
        tags: ['audio']
    }, {
        label: 'Image',
        tags: ['img', 'a']
    }, {
        label: 'Text',
        tags: ['div', 'a', 'b', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'p', 'span']
    }, {
        label: 'Video',
        tags: ['video']
    }];
    scope.selectedType = scope.types[2];
    scope.tags = scope.selectedType.tags;
    scope.selectedTag = scope.tags[0];
};

module.exports = {
    fsCmsContentType: function(angular) {
        angular.module('fsCms').directive('fsCmsContentType', [
            function () {
                return {
                    restrict: 'E',
                    templateUrl: 'partials/cms/contentType',
                    replace: true,
                    link: function (scope) {
                        initScope(scope);
                        scope.$watch('selectedType', function (newVal) {
                            scope.tags = newVal.tags;
                            scope.selectedTag = scope.tags[0];
                        });

                    }
                };
            }
        ]);
    }
};
