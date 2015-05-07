'use strict';

var modules = {
    controllers: require('./controllers/controllersContainer'),
    directives: require('./directives/directivesContainer'),
    services: require('./services/servicesContainer')
};

var init = function(angular) {
    for (var m in modules) {
        for (var c in modules[m]) {
            for (var i in modules[m][c]) {
                modules[m][c][i](angular);
            }
        }
    }
};

module.exports = {
    init: init
};