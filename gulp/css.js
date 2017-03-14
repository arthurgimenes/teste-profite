var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano')

gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ]
    return gulp.src('./src/styl/index.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/css/'))
})
 