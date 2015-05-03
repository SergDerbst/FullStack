'use strict';

var browserify   = require('browserify'),
    browserSync  = require('browser-sync'),
    buffer       = require('vinyl-buffer'),
    bundleLogger = require('../../util/bundleLogger'),
    gulp         = require('gulp'),
    handleErrors = require('../../util/handleErrors'),
    source       = require('vinyl-source-stream'),
    uglify       = require('gulp-uglify'),
    watchify     = require('watchify'),
    config       = require('../../config').browserify;

gulp.task('browserify', function() {
    var bundler = browserify({
            cache: {},
            packageCache: {},
            fullPaths: true,
            entries: config.entryPoint,
            debug: true
        }),
        bundle = function() {
            bundleLogger.start(config.entryPoint);
            return bundler
                .bundle()
                .pipe(source(config.bundleName))
                .pipe(buffer())
                //.pipe(uglify())
                .pipe(gulp.dest(config.dest))
                .pipe(browserSync.reload({stream: true}))
                .on('error', handleErrors)
                .on('end', bundleLogger.end);
        };

    console.log(browserSync.reload);
    if (global.isWatching) {
        bundler = watchify(bundler);
        bundler.on('update', bundle);
    }
    return bundle();
});