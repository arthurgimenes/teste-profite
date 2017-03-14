/* global gutil */
var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackConfig = require('./../webpack.config.js')

gulp.task('webpack', function(callback) {
    console.log('Running webpack');
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err)
        console.log("[webpack]", stats.toString())
        callback()
    })
})
