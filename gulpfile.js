var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('serve', ['compile-sass', 'compile-js'], function() {
  browserSync.init({
    server: { baseDir: './public' }
  });

  gulp.watch('src/styles/*.scss', ['compile-sass']);
  gulp.watch('src/**/*.js', ['compile-js']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('compile-sass', function() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.stream());
});

gulp.task('compile-js', function(callback) {
  return gulp.src('src/index.js')
    .pipe(webpackStream(webpackConfig))
    .on('error', swallowError)
    .pipe(gulp.dest('public/js/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}
