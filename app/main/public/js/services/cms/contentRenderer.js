'use strict';

module.exports = {
    contentRenderer: function(angular) {
        angular.module('fsCms').factory('contentRenderer', [
            'contentContainer',
            function(container) {
                return function() {
                    var contentPane = angular.element(document.getElementById('contentPane')),
                        isCurrent = function(element) {
                            return element.attr('id') === retrieveId(container.currentItem());
                        },
                        retrieveId = function(item) {
                            return item.id + '.' + item.itemNumber;
                        },
                        render = function(doc, element) {
                            for (var d in doc) {
                                var el = document.createElement(doc[d].tag),
                                    jEl = angular.element(el);
                                jEl.attr('id', retrieveId(doc[d]));
                                jEl.attr('class', doc[d].css);
                                if (isCurrent(jEl)) {
                                    jEl.addClass('cnt-current');
                                }
                                jEl.text(doc[d].content);
                                element.append(el);
                                render(doc[d].children, jEl);
                            }
                        };

                    contentPane.empty();
                    render(container.topLevel(), contentPane);
                };
            }
        ]);
    }
};