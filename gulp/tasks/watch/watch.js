/* Notes:
 - gulp/tasks/browserify.js handles js recompiling with watchify
 - gulp/tasks/browserSync.js watches and reloads compiled files
 */

var gulp  = require('gulp');
var config= require('../../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.frontend.images.src, ['images']);
    gulp.watch(config.frontend.libs.src, ['libs']);
    gulp.watch(config.backend.scripts.src, ['server', 'run']);
    gulp.watch(config.frontend.styles.src, ['styles']);
    gulp.watch(config.frontend.views.src, ['views']);
});