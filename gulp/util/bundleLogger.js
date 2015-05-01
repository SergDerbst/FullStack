/*
 bundleLogger
 ------------
 Provides gulp style logs to the bundle method in browserify.js
 */

var util        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
    start: function(entryPoint) {
        startTime = process.hrtime();
        util.log('Running', util.colors.green("'bundle'") + '...');
        if (entryPoint) {
            util.log('Entry point: ' + entryPoint);
        }
    },

    end: function() {
        var taskTime = process.hrtime(startTime);
        var prettyTime = prettyHrtime(taskTime);
        util.log('Finished', util.colors.green("'bundle'"), 'in', util.colors.magenta(prettyTime));
    }
};