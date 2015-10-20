var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    mocha = require('gulp-mocha'),
    zip = require('gulp-zip');

gulp.task('typescript-to-js', function() {
  var tsResult = gulp.src(['./**/*.ts', '!./node_modules', '!./node_modules/**'], { base: './' })
                      .pipe(typescript({ noExternalResolve: true, target: 'ES5', module: 'commonjs' }));

  return tsResult.js
            .pipe(gulp.dest('.'));
});

gulp.task('zip', function() {
    gulp.src('*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('tests', function() {
    gulp.src('test/test.js')
        .pipe(mocha());
});

gulp.task('default', ['typescript-to-js', 'zip'], function() {
});

/**
 * Watch typescript task, will call the default typescript task if a typescript file is updated.
 */
gulp.task('watch', function() {
  gulp.watch([
    './**/*.ts',
  ], ['default']);
});

