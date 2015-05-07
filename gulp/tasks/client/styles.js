/*
    styles task
    -----------
    Compiles sass files.
 */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    sourcemap = require('gulp-sourcemaps'),
    eventStream = require('event-stream'),
    concat = require('gulp-concat'),
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
            .pipe(sourcemap.write(config.mapsDest));
    };

    var vendorFiles = sasser(config.fontSrc),
        appFiles = sasser(config.appSrc);

    return eventStream.concat(vendorFiles, appFiles)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.cssDest));
});