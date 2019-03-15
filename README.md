
Introduction
===========
Gulp-based taskrunner

Details
=======
Option A: Gulp, Gulp plugins, custom functionality.
Option B: Gulp, PostCSS + PostCSS plugins, Gulp plugins, custom functionality.
PostCSS approach benefits: more regular Autoprefixer updates, performance improvements, etc.
While well-supported, its probably best to minimize overreliance on Sass.
Postcss-preset-env author 'break-off'


<h3>Gulp Options</h3>
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var svgmin = require('gulp-svgmin');

<h3>PostCSSOptions</h3>
postcss-preset-env
postcss-import
autoprefixer
cssnano
postcss-preset-env
postcss-import
