/**
 * Prevent pipe breaking caused by errors from gulp plugins
 */
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var through = require('through2');

var source = '**/*.js'; // all js files

var countFiles = 0;

// process only one file and break.
gulp.task('without-plumber', function(){
    return gulp
        .src(source)
        .pipe(thisBreaks())
        .pipe(out());
});

// this continues, does not break pipe.
gulp.task('with-plumber', function(){
    return gulp
        .src(source)
        .pipe(plumber())
        .pipe(thisBreaks())
        .pipe(out());
});

// this will break our pipeline
var thisBreaks = () => {
    return through.obj((file, enc, cb) => {
        console.log("INSIDE BREAK: " + file.path);
        countFiles++;
        var error = countFiles==1 ? "My Error..." : null;
        return cb(error, file); // this triggers error (on first file)
    });
}

// simple logging
var out = () => {
    return through.obj((file, enc, cb) => {
        console.log("LOG: " + file.path);
        return cb(null, file);
    });
}
