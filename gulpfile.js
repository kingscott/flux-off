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
};

gulp.task('build:dist', function () {
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

// gulp.task('build:watch', function () {
//   watch(src.lib, function () {
//     runSequence('build', browserSync.reload);
//   });
// });
//
// gulp.task('sync', ['build'], function (cb) {
//   browserSync({
//     port: 5000,
//     open: false,
//     server: {
//       baseDir: [ "./" ],
//       index: "./index.html"
//     }
//   }, cb);
//
//   process.on('exit', function () {
//     browserSync.exit();
//   });
// });

gulp.task('default', [ 'build' ]);
