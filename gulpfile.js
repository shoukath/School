// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var useref = require('gulp-useref');


 // Concatenate JS Files
gulp.task('scripts', function() {
	return gulp.src('src/client/app/*.js')
		// .pipe(concat('main.js'))
		.pipe(gulp.dest('build/js'));
});


//gulp-useref
gulp.task('useref', function(){
	return gulp.src('src/client/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

 // Default Task
gulp.task('default', ['useref']);