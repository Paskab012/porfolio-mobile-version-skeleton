var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('style', function (done) {
    gulp.src('./style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))

    done()
});
