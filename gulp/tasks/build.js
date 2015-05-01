/*
    build task
    ----------
 */

var gulp = require('gulp');

gulp.task('client', ['browserify', 'styles', 'images', 'libs', 'views']);
gulp.task('server', ['client', 'libs']);
gulp.task('build', ['client']);

//TODO distinguish between dev and prod (uglify) - maybe even test