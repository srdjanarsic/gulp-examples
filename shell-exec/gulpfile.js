/**
 * Executes task in serial (one by one)
 */

var gulp = require("gulp");
var exec = require('child_process').exec;

// first task must have callback argument signature (cb) and call it in order inform gulp
gulp.task("shell-exec", function(cb){
    exec("ls", function(error, stdout, stderr){
        if(error) return cb(error);
        console.log(stdout);
        cb();
    });
})

gulp.task('default', ['shell-exec']);
