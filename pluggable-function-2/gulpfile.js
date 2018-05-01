/**
 * Prevent pipe breaking caused by errors from gulp plugins
 */
var gulp = require('gulp');
var through = require('through2');
var path = require('path');

var source = 'source.txt';
var destFilename = 'destination.txt';
var dest = './';

// process only one file and break.
gulp.task('custom-pipe-func', function () {
    return gulp
        .src(source)
        .pipe(myAddPrefixSufix("HELLO ", "!"))
        .pipe(myRename(destFilename))
        .pipe(gulp.dest(dest));
});

gulp.task('default', ['custom-pipe-func']);

// this pipe function adds 
// NOTE: This is short version, for full version visit https://github.com/sindresorhus/gulp-plugin-boilerplate/blob/master/index.js
var myAddPrefixSufix = (prefix, sufix) => {
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
