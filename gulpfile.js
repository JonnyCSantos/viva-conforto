// Define all required variables
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify')

// Default taks
// Run all default task when type "gulp" on terminal
gulp.task('default', ['sass', 'js','watch']);

// Sass Task
gulp.task('sass', function () {
 // Define a folder to listen - All files witch has .scss extension
 return gulp.src('viva-conforto-app/src/components/**/*.scss')
   // Concatenate all files in the above directory
   .pipe(concat('app.min.css'))
   // Compress Sass file into css folder
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   // Define dest folder
   .pipe(gulp.dest('viva-conforto-app/src'));
});

// Js Task
gulp.task('js', function () {
  // Define a folder to listen - All files witch has .js extension
  return gulp.src('viva-conforto-app/src/jquery/**/*.js')
    // Concatenate all files in the above directory
    .pipe(concat('script.min.js'))
    // Compress js file into js folder
    .pipe(uglify())
    // Define dest folder
    .pipe(gulp.dest('viva-conforto-app/src'));
 });

// Watch Task
gulp.task('watch', function() {
  gulp.watch('viva-conforto-app/src/components/**/*.scss', ['sass']);
  gulp.watch('viva-conforto-app/src/jquery/**/*.js', ['js']);
});