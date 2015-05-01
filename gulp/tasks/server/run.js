'use strict';

/*
    Starts and watches the server.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync'),
    config = require('../../config').server.run;

gulp.task('run', ['build'], function(cb) {
    var called = false;
    nodemon({
        script: config.fileToRun,
        watch: [config.filesToWatch],
        ext: 'js',
        env: {
            'NODE_ENV': 'development'
        }
    }).on('start', function() {
        if (!called) {
            cb();
            called = true;
        }
    }).on('restart', ['build'], function() {
        setTimeout(function () {
            browserSync.reload({
                stream: false
            });
        }, 500);
    });
});