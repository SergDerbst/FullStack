'use strict';

var monk = require('monk'),
    DbConnector = function(app) {
        var self = this,
            errorHandler = function(err) {
                if (err && err.message !== 'ns not found') {
                    throw err;
                }
            },
            init = function(app) {
                app.use(function(req, res, next) {
                    req.db = self.db;
                    next();
                });
            };
        self.db = monk('localhost:27017/meinklang');
        self.errorHandler = errorHandler;
        init(app);
    };

module.exports = DbConnector;