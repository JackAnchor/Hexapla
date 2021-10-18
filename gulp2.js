'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// Plugins
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var postcssPresetEnv = require('postcss-preset-env');


gulp.task('css', function() {
  var processors = [
    // Apply autoprefixes
    autoprefixer({browsers: ['last 1 version']}),
    // Clean CSS
    postcssPresetEnv({
        /* stage 3 features + css nesting rules */
      stage: 3,
      features: {
        'nesting-rules': true}}),
    // Compile cssnano
    cssnano() 
  ];

  // Run processors array/update CSS
  return gulp.src('./src/*.css')
    .pipe( postcss(processors) )
    .pipe(gulp.dest('./dist'));
});

 // Expose task and specify gulp.series or gulp.parallel
gulp.task('default', function() {
  gulp.watch('./src/*.css', gulp.series('css'));
});
