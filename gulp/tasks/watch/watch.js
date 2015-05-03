/* Notes:
 - gulp/tasks/browserify.js handles js recompiling with watchify
 - gulp/tasks/browserSync.js watches and reloads compiled files
 */

var gulp  = require('gulp'),
    browserSync = require('browser-sync'),
    config= require('../../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.images.src, ['images', browserSync.reload]);
    gulp.watch(config.styles.appSrc + '/**/*.scss', ['styles', browserSync.reload]);
    gulp.watch(config.views.src, ['views', browserSync.reload]);
});