'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    config = require('../../config').scripts;

gulp.task('scripts', function() {
    return gulp.src(config.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('server.js'))
        .pipe(gulp.dest(config.dest));
        //TODO uglify for production
});