var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');

gulp.task('clean', function () {
	return gulp.src('dist/')
	.pipe(clean());
});

gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('uglify', function () {
	return es.merge([
		gulp.src(['lib/jquery/jquery-3.1.0.min.js', 'lib/angular/angular.min.js', 'lib/angular-route/angular-route.min.js', 'bower_components/angular-messages/angular-locale_pt-br.js', 'lib/owl-carousel/js/owl.carousel.min.js', 'lib/fancybox/js/jquery.fancybox.js']),
		gulp.src(['js/**/*.js']).pipe(concat('scripts.js')).pipe(uglify())
	])
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function () {
	return gulp.src('view/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/view'))
});

gulp.task('cssmin', function () {
	return gulp.src(['css/reset.css', 'lib/**/*.css', 'css/app.css'])
	.pipe(cleanCSS())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('img', function () {
	return gulp.src('img/**/*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('prod', function () {
	return gulp.src('index.html')
	.pipe(rename('index.html'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('default', function (cb) {
	return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin', 'img', 'prod'], cb)
});