var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var pump    = require('pump');

gulp.task('hello', function() {
  return console.log('Hello');
});

gulp.task('gulpworld', ['hello'], function() {
  return console.log('gulpworld');
});

gulp.task('compress', ['gulpworld'], function(cb) {
  console.log('uglify');
  pump([
        gulp.src('./public/src/js/*.js'),
        uglify(),
        gulp.dest('./public/dest/js/')
    ], cb
  );
});

gulp.task('default', ['compress']);  // default는 기본으로 실행할 task.
