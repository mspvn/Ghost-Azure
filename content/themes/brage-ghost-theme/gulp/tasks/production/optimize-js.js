var gulp = require('gulp');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var config = require('../../config').optimizeJs;

gulp.task('optimize:js', function () {
  return gulp
    .src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
