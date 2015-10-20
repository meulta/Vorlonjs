var gulp = require('gulp'),
    typescript = require('gulp-typescript');
    mocha = require('gulp-mocha');

gulp.task('typescript-to-js', function() {
  var tsResult = gulp.src(['./**/*.ts', '!./node_modules', '!./node_modules/**'], { base: './' })
                      .pipe(typescript({ noExternalResolve: true, target: 'ES5', module: 'commonjs' }));

  return tsResult.js
            .pipe(gulp.dest('.'));
});

//gulp.task('zip', function () {
//    var tsResult = gulp.src('*')
//            .pipe(zip('archive.zip'))
//            .pipe(gulp.dest('dist'));
//    return tsResult.js
//          .pipe(gulp.dest('.'));
//});

gulp.task('default', function() {
    gulp.start('typescript-to-js');
    gulp.src('test/test.js')
        .pipe(mocha());
    gulp.src('*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
  //gulp.start('zip');
});

/**
 * Watch typescript task, will call the default typescript task if a typescript file is updated.
 */
gulp.task('watch', function() {
  gulp.watch([
    './**/*.ts',
  ], ['default']);
});

