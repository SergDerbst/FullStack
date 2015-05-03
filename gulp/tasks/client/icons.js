'use strict';

/*
 Make FontAwesome available to the client.
 */

var gulp = require('gulp'),
    config = require('../../config').icons;

gulp.task('icons', function() {
    console.log(config);
    return gulp.src(config.src).pipe(gulp.dest(config.dest));
});