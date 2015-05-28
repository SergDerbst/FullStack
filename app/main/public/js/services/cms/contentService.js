'use strict';

module.exports = {
    contentService: function(angular) {
        angular.module('fsCms').service('contentService', [
            'contentContainer',
            'contentRenderer',
            'contentResource',
            function(container, render, contentResource) {
                this.init = function(contentId) {
                    contentResource.fetch({
                            id: contentId
                        }, function(response) {
                            container.init(response.data);
                            render();
                        }
                    );
                };
            }
        ]);
    }
};