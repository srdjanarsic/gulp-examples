/**
 * Check code using jshint and format output with jshint-stylish
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
require('jshint-stylish');

var source = './**/*.bad.coded.js';

gulp.task('jshint', function(){
    return gulp
        .src(source)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
    return gulp
        .watch(source, ['jshint'])
        .on('change', function(event){
            console.log('* File ' + event.path + ' was ' + event.type + ' running tasks ...')
        });
});

gulp.task('default', ['jshint']);
