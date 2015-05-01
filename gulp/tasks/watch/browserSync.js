var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../../config').browserSync;

gulp.task('browserSync', ['run'], function() {
    if (true) {
        browserSync.init({
            files: config.files,
            proxy: 'localhost:3000',
            port: 5000,
            browser: ['google chrome']
        });
    }
});