var gulp      = require('gulp');
var pump      = require('pump');
var uglify    = require('gulp-uglify');
var concat    = require('gulp-concat');
var imagemin  = require('imagemin') ;
var cleancss  = require('gulp-clean-css');
var sass      = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var del       = require('del');

var publicPath = {
  src: './public/src',
  dest: './public/dest'
};

gulp.task('hello', function() {
  return console.log('Hello');
});

gulp.task('gulpworld', ['hello'], function() {
  return console.log('gulpworld');
});

gulp.task('concat', function() {
  console.log('concat1!!');
  pump([
    gulp.src([publicPath.src + '/js/*.js', 
              publicPath.src + '/processed/uglify.js']),
    concat('concatenated.js'),
    uglify(),
    gulp.dest(publicPath.dest + '/js/')
  ]);
});

gulp.task('uglify', function(cb) {
  pump([
        gulp.src(publicPath.src + '/processed/*.js'),
        uglify(),
        gulp.dest(publicPath.dest + '/js/')
    ], cb
  );
});

gulp.task('imagemin', function() {
  pump([
    gulp.src([publicPath.src + '/img/*.jpg', 
              publicPath.src + '/img/.png']),
    imagemin(),
    gulp.dest(publicPath.src + '/img/')
  ]);
});

gulp.task('cleancss', function(){
  pump([
    gulp.src([publicPath.src + '/css/minify.css',
              publicPath.src + '/processed/*.css']),
    cleancss(),
    gulp.dest(publicPath.dest + '/css/')
  ]);
});

gulp.task('sass', function() {
  pump([
    gulp.src([publicPath.src + '/sass/*.scss',
              publicPath.src + '/sass/*.sass']),
    sass().on('error', sass.logError),
    gulp.dest(publicPath.dest + '/processed/')
  ]);
});

gulp.task('concatcss', function() {
  pump([
    gulp.src([publicPath.src + '/css/concat1.css',
              publicPath.src + '/css/concat2.css']),
    concatCss('concatenated.css'),
    uglify(),
    gulp.dest(publicPath.dest + '/css/')
  ]);
});

gulp.task('clean', function() {
  return del.sync([publicPath.dest + '/js/*.js',
                   publicPath.dest + '/css/*.css',
                   publicPath.dest + '/img/*'])
});

// watch public
gulp.task('watch', function() {
  gulp.watch(publicPath.src + '/js/', ['concat'])
  gulp.watch(publicPath.src + '/img/', ['imagemin']);
  gulp.watch(publicPath.src + '/css/', ['cleancss']);
  gulp.watch(publicPath.src + '/sass/', ['sass', 'cleancss']);
});

gulp.task('default', ['clean', 'watch']);  // default는 기본으로 실행할 task.




