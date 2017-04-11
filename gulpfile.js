'use strict';

var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    connect     = require('gulp-connect'),
    flatten     = require('gulp-flatten'),
    ghPages     = require('gulp-gh-pages'),
    jsonminify  = require('gulp-jsonminify'),
    minifyHTML  = require('gulp-minify-html'),
    rename      = require('gulp-rename'),
    replace     = require('gulp-replace'),
    sass        = require('gulp-sass'),
    react       = require('gulp-react');

var path        = require('path');

var DIST_WEB    = './dist';

gulp.task('default', ['build', 'run', 'watch']);
gulp.task('build', ['build-html', 'build-script', 'build-style']);


gulp.task('build-html', function() {
  return gulp.src('./src/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest(DIST_WEB))
    .pipe(connect.reload());
});


gulp.task('build-style', ['process-images','process-fonts'], function() {
    return gulp.src('./src/style/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(DIST_WEB+ '/style'))
            .pipe(connect.reload());
});

gulp.task('build-json', function () {
    return gulp.src(['./src/script/json/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest(DIST_WEB + '/json'))
        .pipe(connect.reload());
});

gulp.task('build-libs', ['build-json'], function() {
    var libs = [
        './bower_components/react/react.min.js',
        './bower_components/react/react-dom.min.js',
        './bower_components/jquery/dist/jquery.min.js'
    ];

    return gulp.src(libs)
            .pipe(concat('libs.js'))
            .pipe(gulp.dest(DIST_WEB + '/script'))
            .pipe(connect.reload());
});

gulp.task('build-react', ['build-libs'], function() {
  return gulp.src('./src/script/jsx/main.jsx')
        .pipe(react())
        .pipe(gulp.dest(DIST_WEB + '/script/jsx'));
});

gulp.task('build-script', ['build-libs'], function() {
    return gulp.src('./src/script/main.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest(DIST_WEB + '/script'))
            .pipe(connect.reload());
});




gulp.task('run', function() {
   connect.server({
      root: DIST_WEB,
      port: 8080,
      livereload: {
          port: 8081
      }
   });
});

gulp.task('watch', function() {
    gulp.watch('./src/script/jsx/*.jsx', ['build-react']);
    gulp.watch('./src/script/*.js', ['build-script']);
    gulp.watch('./src/script/json/*.json', ['build-json']);
    gulp.watch('./src/*.html', ['build-html']);
    gulp.watch('./src/style/*.scss', ['build-style']);
});

gulp.task('process-fonts', function() {
   var fontSrcGlob = './assets/fonts/**/*.{ttf,woff,woff2,eot,svg}';

   return gulp.src(fontSrcGlob)
      .pipe(flatten())
      .pipe(gulp.dest(path.join(DIST_WEB, '/assets/fonts')));
});

gulp.task('process-images', function() {
   // var imageSrcGlob = './assets/images/**/*.{png,jpg,jpeg}';

   // return gulp.src(imageSrcGlob)
   //    .pipe(flatten())
   //    .pipe(gulp.dest(DIST_WEB + '/assets/img'));
});