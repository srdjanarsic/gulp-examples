/**
 * Executes custom task
 */

var gulp = require("gulp");
var exec = require('child_process').exec;

// use nodejs to create custom task 
gulp.task("custom-task", function(cb){
    console.log("Starting my task ...");
    setTimeout(() => {
        console.log("I am done!");
        cb();
    }, 1000);
})

gulp.task('default', ['custom-task']);
