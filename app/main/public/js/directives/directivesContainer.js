'use strict';

var container = [
    require('./cms/cms'),
    require('./layout/layout')
];

module.exports = function(angular) {
    for(var c in container) {
        for (var d in container[c]) {
            container[c][d](angular);
        }
    }
};