/**
 * Executes task in serial (one by one)
 */

var gulp = require("gulp");
var exec = require('child_process').exec;

// first task must have callback argument signature (cb) and call it in order to continue
gulp.task("task-one", function(cb){
    exec('echo "Exec shell 1 ..."', function(error, stdout, stderr){
        console.log(stdout);
        cb();
    });
})

//second task need to know dependencies in order to wait.
gulp.task("task-two", ["task-one"], function(cb){
    exec('echo "Exec shell 2 ..."', function(error, stdout, stderr){
        console.log(stdout);
        cb();
    });
})

gulp.task('default', ['task-one', 'task-two']);
