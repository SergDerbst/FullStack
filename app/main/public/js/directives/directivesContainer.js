'use strict';

var container = [
    require('./layout/layoutDirectives')
];

module.exports = function(module) {
    for(var c in container) {
        for (var d in container[c]) {
            container[c][d](module);
        }
    }
};