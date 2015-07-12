var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var gulpif = require('gulp-if');
var lazypipe = require('lazypipe');
var babelify = require('babelify');
var through2 = require('through2');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var src = {
  lib: 'src/**/*.*',
  comps: 'src/**/**/*.*'
};

gulp.task('build:components', function () {
  var isModule = function (file) {
    return /\.(jsx|es6)$/.test(file.relative);
  };

  var processModule = lazypipe()
    .pipe(rename, { extname: '.js' })
    .pipe(babel);

  return gulp.src(src.comps)
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(gulpif(isModule, processModule()))
    .pipe(gulp.dest('lib'));
});

gulp.task('build:lib', function () {
  var isModule = function (file) {
    return /\.(jsx|es6)$/.test(file.relative);
  };

  var processModule = lazypipe()
    .pipe(rename, { extname: '.js' })
    .pipe(babel);

  return gulp.src(src.lib)
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(gulpif(isModule, processModule()))
    .pipe(gulp.dest('lib'));
});

gulp.task('build:dist', [ 'build:lib' ], function () {
  return gulp.src('src/main.jsx')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(through2.obj(function (file, enc, next) {
      browserify({
        debug: true,
        basedir: './',
        extensions: [ '.jsx', '.es6' ]
      })
        .add(file)
        .transform(babelify)
        .bundle(function (err, res) {
          if (err) {
            next(new Error(err));
          } else {
            file.contents = res;
            next(null, file);
          }
        });
    }))
  .pipe(rename('main.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('build', [ 'build:dist' ]);
gulp.task('default', [ 'build' ]);
