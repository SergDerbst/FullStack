'use strict';

module.exports = {
    cmsResource: function(angular) {
        angular.module('services').factory('cmsResource', [
            '$resource',
            function($resource) {
                return $resource('api/cms/editor', {}, {
                    fetch: { method: 'POST', params: {id: '@id'}}
                });
            }
        ])
    }
};