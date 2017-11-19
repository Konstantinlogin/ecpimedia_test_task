"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', function () {
  return gulp.src('./source/sass/*.sass')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('templates', function buildHTML() {
  return gulp.src('./source/pug/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
  gulp.watch('./source/sass/**/*.sass', ['sass']);
  gulp.watch('./source/pug/**/*.pug', ['templates']);
});

gulp.task('default', ['watch', 'sass', 'templates']);