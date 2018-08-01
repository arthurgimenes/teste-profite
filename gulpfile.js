/**
 * Created by lucas on 2/22/17.
 */
const gulp = require('gulp')
const bs = require('browser-sync').create()
const sass = require('gulp-sass')
const jshint = require('gulp-jshint')
const htmlv = require('gulp-html-validator')
const imagemin = require('gulp-imagemin')
const sourcemap = require('gulp-sourcemaps')
const stylish = require('jshint-stylish')
const jpgtrans = require('imagemin-jpegtran')
const optipng = require('imagemin-optipng')
const svgo = require('imagemin-svgo')

const files = {
  css: ['assets/stylesheets/**/*.css'],
  img: ['assets/image/**/*'],
  js: 'assets/javascripts/**/*.js',
  sass: ['assets/sass/**/*.scss']
}
const reload = bs.reload

gulp.task('server', () => {
  bs.init({
    server: {
      baseDir: './'
    },
    open: false,
    reloadOnRestart: true,
    logPrefix: 'Teste Profite'
  })

  gulp.watch(['index.html', files.css, files.img, files.js, files.sass], reload)
  gulp.watch(files.sass, ['sass', reload])
  gulp.watch(files.img, ['imagemin', reload])
  gulp.watch('index.html', ['htmlV', reload])
})
gulp.task('server-out', () => {
  bs.init({
    server: {
      baseDir: 'out'
    },
    open: false,
    port: 4000,
    reloadOnRestart: true,
    logPrefix: 'HTML Validator'
  })

  gulp.watch('out/*.html', reload)
})

gulp.task('sass', () => {
  gulp.src(files.sass)
    .pipe(sourcemap.init())
    .pipe(sass({
      outputStyle: 'compressed'}
      ).on('error', sass.logError))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('assets/stylesheets'))
})

gulp.task('lint-js', () => {
  gulp.src([files.js, 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
})

gulp.task('imagemin', () => {
  gulp.src(files.img)
    .pipe(imagemin([
      jpgtrans({progressive: true}),
      optipng(),
      svgo([{removeViewBox: false}, {minifyStyle: false}])
    ], {verbose: true}))
    .pipe(gulp.dest('assets/images'))
})

gulp.task('htmlV', () => {
  gulp.src('index.html')
    .pipe(sourcemap.init())
    .pipe(htmlv({format: 'html'}))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('out'))
})

gulp.task('default', () => {})
