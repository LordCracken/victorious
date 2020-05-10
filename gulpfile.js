var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

gulp.task('minify-css', function (done) {
  gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
  done();
});

gulp.task('minify-js', function (done) {
  gulp.src('./src/js/*.js')
    .pipe(minify({
      noSource: true,
      ext: {
        min: '.js'
      },
      ignoreFiles: ['*.min.js']
    }))
    .pipe(gulp.dest('dist/js'))
  done();
});

gulp.task('htmlmin', function (done) {
  gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function (done) {
  gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  done();
});

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'WK8zh4q74KjkhyS85cMthp7kvqrDfyJl'
    }))
    .pipe(gulp.dest('dist/img'))
  done();
});

gulp.task('svg', function (done) {
  gulp.src('./src/img/**/*.svg')
    .pipe(gulp.dest('dist/img'))
  done();
});

gulp.task('server', function (done) {
  gulp.src('./src/*.php')
    .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('server-library', function (done) {
  gulp.src('./src/phpmailer/*.php')
    .pipe(gulp.dest('dist/phpmailer/'))
  done();
});

gulp.task('default', gulp.parallel('htmlmin', 'minify-css', 'minify-js', 'fonts', 'svg', 'server', 'server-library'));