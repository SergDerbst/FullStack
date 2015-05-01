/*
    styles task
    -----------
    Compiles sass files.
 */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    handleErrors = require('../../util/handleErrors'),
    config=require('../../config').frontend.styles;

gulp.task('styles', ['images'], function () {
    return sass(config.src, {
            compass: true,
            bundleExec: true,
            sourcemap: true
        })
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
});