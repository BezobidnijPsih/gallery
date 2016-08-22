var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: 4000
    })
});
gulp.task('browserify', function () {
    return browserify('./app/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js/'));
});
gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch(['app/index.html', 'app/views/**/*.html'], [
        'views'
    ]);
});

gulp.task('views', function () {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist/'));
    gulp.src('./app/views/**/*.html')
        .pipe(gulp.dest('dist/views/'));
});

gulp.task('default', ['browserify', 'views', 'connect', 'watch']);