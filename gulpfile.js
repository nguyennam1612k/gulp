const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
// const jshint = require('gulp-jshint');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('hello', function () {
    console.log('xin chào :v');
});

// Default Task
// gulp.task('default', gulp.parallel('styles', 'scripts', 'images', 'watch'));

gulp.task('watch', function () {
    gulp.watch('./resources/scss/**/*.scss', gulp.series('styles'));
    // gulp.watch('./resources/js/**/*.js', gulp.series('scripts'));
    gulp.watch('./resources/img/*', gulp.series('images'));
});

// Style task
gulp.task('styles', function () {
    return gulp.src('./resources/scss/**/*.scss')
        .pipe(concat('app.css')) // to one file
        .pipe(sourcemaps.init())
        .pipe(sass.sync({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/css'))
});

// Script task
/*gulp.task('scripts', function () {
    return gulp.src('./resources/js/!**!/!*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});*/

// Images Task
gulp.task('images', function() {
    return gulp.src('./resources/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images'));
});