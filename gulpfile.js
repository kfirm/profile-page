const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src('./index.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('other', function () {
    return gulp.src(['./index.html', './css/**/*', './img/**/*', './vid/**/*'], {"base": "."})
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist', ['js', 'other']);