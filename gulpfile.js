
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

gulp.task('test', [], shell.task([
  'mocha --compilers js:babel-core/register'
]));

gulp.task('build', ['transpile'], () => {
  return gulp.src(['dist/**', '!dist/node_modules/aws-sdk', '!dist/node_modules/aws-sdk/**'])
    .pipe(zip('package.zip'))
    .pipe(gulp.dest('builds'));
});
