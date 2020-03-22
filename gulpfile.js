var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Compile sass
gulp.task('sass', function() {
  return gulp.src('./sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

// Concat js
gulp.task('js', function() {
  return gulp.src(['./js/jQuery.min.js',
                   './js/TweenMax.min.js',
                   './js/ScrollMagic.min.js',
                   './js/animation.gsap.min.js',
                   './js/debug.addIndicators.min.js',
                   './js/functions.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./'));
});

// Gulp watch
gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', gulp.series('sass'));
  gulp.watch('./js/*.js', gulp.series('js'));
});
