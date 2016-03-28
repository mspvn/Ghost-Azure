var gulp = require('gulp');
var gzip = require('gulp-gzip');
var config = require('../../config').gzip;

gulp.task('gzip', function () {
  return gulp
    .src(config.src)
    .pipe(gzip())
    .pipe(gulp.dest(config.dest));
});
