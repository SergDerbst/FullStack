/*
    styles task
    -----------
    Compiles sass files.
 */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    sourcemap = require('gulp-sourcemaps'),
    handleErrors = require('../../util/handleErrors'),
    config=require('../../config').styles;

gulp.task('styles', ['icons', 'images'], function () {
    var sasser = function(src) {
        return sass(src, {
            style: 'compact',
            sourcemap: true
        })
            .on('error', handleErrors)
            .pipe(prefix('last 1 version', '> 1%', 'ie 8'))
            .pipe(sourcemap.write(config.mapsDest))
            .pipe(gulp.dest(config.cssDest));
    };

    sasser(config.fontSrc);
    return sasser(config.appSrc);
});