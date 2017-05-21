var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var css = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pump = require('pump');

// gulp styles
gulp.task('styles', function() {
    sass('app/assets/scss/*.scss')
    .on('error', sass.logError)
    .pipe(css({
        styles: 'compressed'
    }))
    .pipe(gulp.dest('dist/assets/css'))
});

// gulp scripts
gulp.task('scripts', function(cb) {
    pump([
        gulp.src('app/assets/js/*.js'),
        uglify(),
        gulp.dest('dist/assets/js')
    ],
    cb
    );
});

// gulp images
gulp.task('images', function() {
    gulp.src('app/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
});

// gulp watch
gulp.task('watch', function() {
    gulp.watch('app/assets/scss/*.scss', ['styles']);
    gulp.watch('app/assets/js/*.js', ['scripts']);
    gulp.watch('app/assets/img/*', ['images']);
});

// gulp
gulp.task('default', ['styles', 'scripts', 'images']);