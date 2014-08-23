var gulp = require('gulp');

var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

gulp.task('html', function () {
  return gulp.src('src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('out'));
});

gulp.task('css', function () {
  return gulp.src('src/css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('out/css'));
});

gulp.task('js', function () {
  return gulp.src('src/js/**/*.js*')
    .pipe(gulp.dest('out/js'));
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('out/images'));
});

gulp.task('build', ['html', 'css', 'js', 'images']);

gulp.task('watch', ['build'], function () {
  return gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['watch']);
