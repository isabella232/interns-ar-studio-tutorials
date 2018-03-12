var gulp = require('gulp');
var babel = require('gulp-babel');
var es2015 = require('babel-preset-es2015');

// JS Task
gulp.task('js', () => {
  return gulp
    .src('build/*.js')
    .pipe(
      babel({
        presets: [es2015]
      })
    )
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  gulp.watch('build/*.js', ['js']);
});

gulp.task('default', ['watch']);
