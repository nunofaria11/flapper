var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var uglify   = require('gulp-uglify');
 
gulp.task('lint', function() {
  return gulp.src('./scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

gulp.task('minify', function () {
   gulp.src('scripts/*.js')
      .pipe(uglify({ mangle: true }))
      .pipe(gulp.dest('scripts/build'))
});

gulp.task('default', ['lint']);
