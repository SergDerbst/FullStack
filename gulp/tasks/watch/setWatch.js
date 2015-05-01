/*
    Sets global flag isWatching to true, so that gulp knows that
    it is running in watch mode.
 */

var gulp = require('gulp');

gulp.task('setWatch', function() {
    global.isWatching = true;
});