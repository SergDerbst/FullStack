var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../../config').frontend.browserSync;

gulp.task('browserSync', ['build'], function() {
    browserSync(config);
});