var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var sass       = require('gulp-ruby-sass');
var plumber    = require('gulp-plumber');
var pleeease   = require('gulp-pleeease');
var concat     = require('gulp-concat');

gulp.task('build', function() {
  return browserify({entries: ['app/app.js'], extensions: ['js']})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('sass', function() {
  sass('app/stylesheets/*.scss', {style: 'expanded'})
    .pipe(plumber())
    .pipe(pleeease({
      autoprefixer: {
        browsers: ['last 2 versions']
      },
      minifier: false
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['build'])
  gulp.watch('app/stylesheets/*.scss', ['sass'])
});

gulp.task('default', ['build', 'sass', 'watch']);
