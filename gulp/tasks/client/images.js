/*
    images task
    -----------
    Processes images to be minimized when they have changed.
 */

var changed     = require('gulp-changed'),
    gulp        = require('gulp'),
    imagemin    = require('gulp-imagemin'),
    config      = require('../../config').frontend.images;

gulp.task('images',function() {
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest));
});