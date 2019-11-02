'use strict';

import gulp from 'gulp';
import serve from 'gulp-serve';
import stylus from 'gulp-stylus';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import htmlmin from 'gulp-htmlmin';
import watch from 'gulp-watch';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
browserSync.create();

gulp.task('browser-sync', function() {
    browserSync.init({
        notify: false,
        open: false,
        server: {baseDir: "./public/"}
    });
});

gulp.task('compile-css', function(){
    return gulp.src('./source/css/main.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({compress: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.stream());
});

gulp.task('compile-js', function(){
    var bundler = browserify('source/js/app.js');
    bundler.transform(babelify);
    bundler.bundle()
        .on('error', function(err) { console.error(err); })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});

gulp.task('compile-html', function(){
    return gulp.src('./source/**/*.html')
        .pipe(htmlmin({collapseWhitespace: false}))
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    gulp.start('browser-sync');
    watch('./source/css/**/*.styl', function(){
        gulp.start('compile-css');
    });
    watch('./source/js/**/*.js', function(){
        gulp.start('compile-js');
    });
    watch('./source/**/*.html', function(){
        gulp.start('compile-html');
    });
});