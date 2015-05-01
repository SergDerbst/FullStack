/*
    browserify task
    ---------------
    Bundle app JS files with browserify.

    If the watch task is runnin, this will use watchify instead of browserify
    for faster bundling using caching.
 */

var browserify   = require('browserify'),
    watchify     = require('watchify'),
    bundleLogger = require('../../util/bundleLogger'),
    gulp         = require('gulp'),
    handleErrors = require('../../util/handleErrors'),
    source       = require('vinyl-source-stream'),
    config       = require('../../config').browserify;

gulp.task('browserify', function() {
    var bundler = browserify({
        //required watchify args
        cache: {}, packageCache: {}, fullPaths: true,
        //entry point of the app
        entries: config.entryPoint,
        //enable source maps
        debug: true
    });

    var bundle = function() {
        bundleLogger.start(config.entryPoint);

        return bundler
            .bundle()
            //report errors
            .on('error', handleErrors)
            //use vinyl-source-stream to make stream gulp compatible
            .pipe(source(config.bundleName))
            //distribute bundle
            .pipe(gulp.dest(config.dest))
            .on('end', bundleLogger.end);
    };

    if (global.isWatching) {
        bundler = watchify(bundler);
        //rebundle with watchify on changes
        bundler.on('update', bundle);
    }

    return bundle();
});