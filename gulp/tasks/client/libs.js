'use strict';

/*
    gulp task to copy external js libs from app to dist folder
 */
var gulp = require('gulp'),
    config = require('./../../config').frontend.libs;

gulp.task('libs', function() {
    gulp.src(config.src).pipe(gulp.dest(config.dest));
});
