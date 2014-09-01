var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    sass      = require('gulp-ruby-sass'),
    uglify    = require('gulp-uglify');
    concat    = require('gulp-concat'),
    notify    = require('gulp-notify'),
    minify    = require('gulp-minify-css'),
    sequence  = require('gulp-run-sequence');



var paths = {

    styles: {
        sassSrc:    'assets/scss/',
        sassFiles:  'assets/scss/*.scss',
        cssSrc:     'assets/css',
        cssFiles:   'assets/css/*.css',
        dest:       './dist/css'
    },
    javascript: {
      dest:         './dist/js/app/'
    }

}




// place code for your default task here
gulp.task('default', ['compile-sass','dist-css', 'dist-js', 'server', 'watch'])

gulp.task('watch', ['server'], function() {
  gulp.watch('./assets/js/app/**/*.js', function(e) {
    gulp.src(e.path).pipe(connect.reload())
    .pipe(notify({ message: 'watch task complete' }));
    sequence('dist-js')
  })
  gulp.watch('.', function(e) {
    gulp.src(e.path).pipe(connect.reload());
  })
  gulp.watch('assets/scss/*.scss', ['compile-sass'], 'styles');

});


gulp.task('dist-js', function() {
  return gulp.src(['assets/js/app/application.js', 'assets/js/app/modules/**/*.js'])
    .pipe(concat('app.min.js'))
    //.pipe(uglify())
    .pipe(notify({ message: 'dist js called' }))
    .pipe(gulp.dest(paths.javascript.dest));
});



/*




gulp.task('styles', function() {
  return gulp.src('.assets/scss/main.scss')
    .pipe(notify({ message: 'Styles task complete' }))

    .pipe(sass({ style: 'expanded' }))
    .pipe(notify({ message: 'Styles task complete' }))

    //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('.assets/css'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(minifycss())
    .pipe(gulp.dest('.assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
*/
/*
gulp.task('style', function () {
    return gulp.src('.assets/scss/*.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('.assets/css'));
});
*/

gulp.task('compile-sass', function() {
  return gulp.src(paths.styles.sassFiles)
    .pipe(notify({ message: 'Begin compile-sass' }))
    .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(notify({ message: 'Styles task complete' }))
});

gulp.task('dist-css', function() {
  return gulp.src(paths.styles.cssFiles)
    .pipe(concat('app.css'))
    //.pipe(minify())
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('styles', function() {
  return gulp.src('assets/css/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('server', function() {
  return connect.server({ port: 8888, livereload: true })
})

gulp.task('run', ['server', 'watch']);
