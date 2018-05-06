/**
 * Object are passed by reference!
 */
var gulp = require('gulp');
var through = require('through2');
var gutil = require('gulp-util');

var source = 'file.txt';
var dest = './';

gulp.task('default', function () {
    return gulp
        .src(source)
        .pipe(one())
        .pipe(two())
        .pipe(gulp.dest(dest));
});

var globalFile = null;
var one = (prefix, sufix) => {
    return through.obj(function (file, enc, cb) {
        globalFile = file; // set to global ref
        cb(null, file);
    });
}

var two = (prefix, sufix) => {
    return through.obj(function (file, enc, cb) {
        gutil.log("Is file passed by reference? Answer: " + (file===globalFile));
        cb(null, file);
    });
}
