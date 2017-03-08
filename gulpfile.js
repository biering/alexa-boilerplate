
var gulp = require('gulp'),
  shell = require('gulp-shell'),
  zip = require('gulp-zip');

gulp.task('clean', shell.task([
  'rm -rf dist/*',
  'rm -rf ./builds/package.zip'
]));

gulp.task('transpile', ['clean'], shell.task([
  './node_modules/.bin/babel src -d dist'
]));

gulp.task('build', ['transpile'], () => {
  return gulp.src('dist/*')
    .pipe(zip('./builds/package.zip'))
    .pipe(gulp.dest('./'));
});
