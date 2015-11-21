// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('src/client/app/*.js')
      // .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'));
});
 // Default Task
gulp.task('default', ['scripts']);