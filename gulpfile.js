'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var typescript = require('gulp-typescript');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('ts', () => {
  return gulp.src('./src/ts/**/*.ts')
    .pipe(typescript({
      target: 'ES5',
      removeComments: true
    }))
    .js.pipe(gulp.dest('./dist/assets/js'));
});
