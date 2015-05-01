/*
    build task
    ----------
 */

var gulp = require('gulp');

gulp.task('client', ['browserify', 'styles', 'images', 'views']);
gulp.task('server', ['client', 'scripts']);
gulp.task('build', ['server', 'client']);

//TODO distinguish between dev and prod (uglify) - maybe even test