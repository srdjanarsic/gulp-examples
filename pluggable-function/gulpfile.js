var gulp = require('gulp');
var through = require('through2');
 
var path = require('path');

// using "pluggable function"
gulp.task('custom-plugabble-func', function () {
    return gulp.src("source.txt")
        .pipe(myRename("destination.txt"))
        .pipe(gulp.dest("./"));
});

// function assigned to myRename returns stream of vinyl files
var myRename = (newName) => {
    return through.obj((file, enc, cb) => { // file is type of Vinyl (virtual file format)
        file.path = path.join(file.base, newName);
        cb(null, file);
    });
}

gulp.task('default', ['custom-plugabble-func']);
