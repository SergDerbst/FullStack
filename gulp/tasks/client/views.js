'use strict';

/*
 gulp task for copying jade views from app to dist folder
 */
var gulp = require('gulp'),
    config = require('./../../config').views;

gulp.task('views', function() {
    gulp.src(config.src).pipe(gulp.dest(config.dest));
});