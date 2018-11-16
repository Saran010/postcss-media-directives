var gulp = require('gulp');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var mediaDirs = require('./index.js');

gulp.task('css', function () {
	var processors = [
		mediaDirs
	];

	gulp.src('./src/styles/styleIn.css')
		.pipe(postcss(processors))
		.pipe(rename('styleOut.css'))
		.pipe(gulp.dest('./src/styles/'))
});

gulp.task('watch', function(){
	gulp.watch(['./src/styles/styleIn.css'], ['css'])
});

gulp.task('default', ['css', 'watch']);