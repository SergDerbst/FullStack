var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../../config').browserSync;

gulp.task('browserSync', ['run'], function() {
    browserSync.init({
        files: config.files,
        proxy: 'localhost:3000',
        port: 5000,
        browser: ['firefox']
    });
});