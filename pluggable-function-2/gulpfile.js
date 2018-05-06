/**
 * Gulp - pluggable function test (plugins)
 */
var gulp = require('gulp');
var through = require('through2');
var path = require('path');

var source = 'source.txt';
var destFilename = 'destination.txt';
var dest = './';

// testing custom pluggable functions
gulp.task('default', function () {
    return gulp
        .src(source)
        .pipe(myAddContentPrefixSufix("HELLO ", "!"))
        .pipe(myRename(destFilename))
        .pipe(gulp.dest(dest));
});

// this pipe function adds content to start and end of file
// NOTE: This is short version, for full version visit https://github.com/sindresorhus/gulp-plugin-boilerplate/blob/master/index.js
var myAddContentPrefixSufix = (prefix, sufix) => {
    return through.obj(function (file, enc, cb) {
        // return if there is no content (file.content==null)
        if (file.isNull()) return cb(null, file);

         // return if content is stream (file.content is Stream type)
        if (file.isStream()) return cb(new PluginError('gulp-<%= pluginName %>', 'Streaming not supported'));
        
        // update content
        file.contents = Buffer.from(prefix + file.contents.toString() + sufix);
        this.push(file)
        cb();
    });
}

var myRename = (newName) => {
    return through.obj((file, enc, cb) => {
        // return if there is no content (file.content==null)
        if (file.isNull()) return cb(null, file);

        // rename file
        file.path = path.join(file.base, newName);
        cb(null, file);
    });
}
