'use strict'

// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint'),
	// concat = require('gulp-concat'),
	useref = require('gulp-useref');

// Run JSHint
gulp.task('lint', function() {
	return gulp.src(['app.js', 'gulpfile.js','src/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

 // Concatenate JS Files
gulp.task('scripts', function() {
	return gulp.src('src/client/app/*.js')
		// .pipe(concat('main.js'))
		.pipe(gulp.dest('build/js'));
});


//gulp-useref
gulp.task('useref', function() {
	return gulp.src('src/client/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

 // Default Task
gulp.task('default', ['lint', 'useref']);