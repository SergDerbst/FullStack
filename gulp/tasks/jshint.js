'use strict';

/*
    Linting the scripts, yo!
 */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    config = require('../config').jshint;

gulp.task('jshint', function() {
    gulp.src(config.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});