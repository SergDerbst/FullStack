'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    config = require('../../config').server.scripts;

gulp.task('scripts', ['jshint'], function() {
    return gulp.src(config.src).pipe(gulp.dest(config.dest));
        //TODO uglify for production
});