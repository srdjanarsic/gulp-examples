/**
 * This example shows how files goes trough stream
 */
var gulp = require('gulp');
var through = require('through2');
var gutil = require('gulp-util');

var source = '**/*.txt';
var dest = './';

gulp.task('default', function () {
    return gulp
        .src(source)
        .pipe(one())
        .pipe(two())
        .pipe(gulp.dest(dest));
});

var one = (prefix, sufix) => {
    return through.obj(function (file, enc, cb) {
        gutil.log("Processing inside one: " + file.path);
        cb(null, file);
    });
}

var two = (prefix, sufix) => {
    return through.obj(function (file, enc, cb) {
        gutil.log("Processing inside two: " + file.path);
        cb(null, file);
    });
}
