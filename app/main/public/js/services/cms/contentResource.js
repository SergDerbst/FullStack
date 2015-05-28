'use strict';

module.exports = {
    contentResource: function(angular) {
        angular.module('fsCms').factory('contentResource', [
            '$resource',
            function($resource) {
                return $resource('api/cms/editor', {}, {
                    fetch: { method: 'GET', params: {id: '@id'}}
                });
            }
        ]);
    }
};