/* global process */
var gulp = require('gulp'),
    gls = require('gulp-live-server')

gulp.task('server', function() {
    var sources = [
        './dist/**/*.*',
        'index.html'
    ]

    var server = gls.static('./',process.env.PORT, process.env.IP)
    server.start()

    return gulp.watch(sources, function (file) {
        server.notify.apply(server, [file])
    })
})

gulp.task('serve', ['watch','server'])
