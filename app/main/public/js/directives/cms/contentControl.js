'use strict';

module.exports = {
    fsCmsContentControl: function(angular) {
        angular.module('fsCms').directive('fsCmsContentControl', [
            'contentContainer',
            'contentRenderer',
            function (container, render) {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'partials/cms/contentControl',
                    link: function (scope, element) {
                        var controls = element[0].querySelectorAll('i.fa');
                        angular.forEach(controls, function(el) {
                            var controlEl = angular.element(el);
                            controlEl.on('click', function(e) {
                                e.stopPropagation();
                                if (container.action(controlEl.attr('data-fs-action'))) {
                                    render();
                                }
                            });
                        });
                    }
                };
            }
        ]);
    }
};