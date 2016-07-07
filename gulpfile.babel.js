'use strict'

// - Modules:
import gulp from 'gulp'

import gulpPlugins from 'gulp-load-plugins'
const $ = gulpPlugins()

import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import lrload from 'livereactload'

import browserSync from 'browser-sync'
const bs = browserSync.create()

// - Configs:
const publicPath = './public'
const assetsGlob = 'client/assets/**/*.*'
const sassGlob = 'client/scss/**/*.scss'

// - NODE_ENV:
const isProd = process.env.NODE_ENV === 'production'

// - Sass:
const sassConfig = {
  outputStyle: isProd ? 'compressed' : 'expanded',
  includePaths: [
    // no frameworks here :)
  ]
}

// - Browserify:
function createBundler(useWatchify) {
  return browserify({
    entries: ['./client/js/app.js'],
    transform: [[babelify, {}]],
    plugin: isProd || !useWatchify ? [] : [ lrload ], // live-react-load
    debug: !isProd,
    cache: {},
    packageCache: {},
    fullPaths: !isProd // for watchify
  })
}

// - BUNDLE:
gulp.task('bundle:assets', () => {
  gulp.src(assetsGlob)
    .pipe(gulp.dest('./public'))
})

gulp.task('bundle:js', () => {
  let bundler = createBundler(false)
  bundler
    .bundle()
    .pipe(source('js/app.js'))
    .pipe(buffer())
    .pipe($.uglify())
    .pipe(gulp.dest(publicPath))
})

gulp.task('bundle:sass', () => {
  gulp.src(sassGlob)
    .pipe($.sass(sassConfig).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('bundle', ['bundle:assets', 'bundle:js', 'bundle:sass'])

// - WATCH:
gulp.task('watch:assets', () => {
  gulp.src(assetsGlob)
    .pipe(gulp.dest('./public'))
    .pipe(bs.reload({ stream: true }))
})

gulp.task('watch:js', () => {
  // start JS file watching and rebundling with watchify
  let bundler = createBundler(true)
  let watcher = watchify(bundler)
  rebundle()
  return watcher
    .on('error', $.util.log)
    .on('update', rebundle)

  function rebundle() {
    $.util.log('Update JavaScript bundle')
    watcher
      .bundle()
      .on('error', $.util.log)
      .pipe(source('js/app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(publicPath))
  }
})

gulp.task('watch:sass', () => {
  gulp.src(sassGlob)
    .pipe($.sass(sassConfig).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./public/css'))
    .pipe(bs.stream())
})

gulp.task('default', ['watch:assets', 'watch:sass', 'watch:js'], () => {
  bs.init({ serveStatic: ['./public'], port: 3000 })

  gulp.watch([sassGlob], ['watch:sass'])
  gulp.watch([assetsGlob], ['watch:assets'])
})
