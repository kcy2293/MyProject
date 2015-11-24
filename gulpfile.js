/******************************
 * GLOBAL VARIABLES
 ******************************/
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bSync = require('browser-sync').create();

var paths = {
	src : ['./views/index.html', './views/partials/*.html', './views/css/*.css', './views/js/*.js']
};

gulp.task('RestServer', function() {
	nodemon({
		script: 'server.js',
		ext: 'js',
		env: {'NODE_ENV' : 'development'}
	}).on('restart', function() {
		console.log("Server restarted!!");
	});
});

gulp.task('browser-sync', function() {
	bSync.init({
		server : {
			baseDir: "./",
			index: "views/index.html"
		},
		port: 5001,
		ui: { port: 5002 }
	});
	gulp.watch([paths.src]).on('change', bSync.reload);
});


gulp.task('default', ['RestServer', 'browser-sync']);
