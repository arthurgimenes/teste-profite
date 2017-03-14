var gulp = require('gulp')

gulp.task('watch', function(){
    gulp.watch(['./src/js/**/*.js'], ['webpack'])
    gulp.watch(['./src/styl/**/*.styl'], ['css'])
})
