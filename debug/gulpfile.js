/**
 * Debug - handle stream events (output to console)
 */

var gulp = require('gulp');

var source = '**/*.js'; // all js files

gulp.task('debug', ['debug2'], function(){

    var stream =  gulp.src(source) ;

    stream
        .on("readable",()=>console.log("READABLE EVENT"))
        .on("data",(e)=>{
            console.log("DATA EVENT");
            console.log(e);
        })
        .on("error",(e)=>console.log("ERROR EVENT"))
        .on("close",(e)=>console.log("CLOSE EVENT"))
        .on("end",(e)=>console.log("END EVENT"));

    return stream;

});

gulp.task('debug2', function(){

    console.log("DEBUG 2");

    var stream =  gulp.src(source) ;

    stream
        .on("readable",()=>console.log("2 READABLE EVENT"))
        .on("data",(e)=>{
            console.log("2 DATA EVENT");
            console.log(e);
        })
        .on("error",(e)=>console.log("2 ERROR EVENT"))
        .on("close",(e)=>console.log("2 CLOSE EVENT"))
        .on("end",(e)=>console.log("2 ND EVENT"));

    return stream;

});

gulp.task('default', ['debug']);
