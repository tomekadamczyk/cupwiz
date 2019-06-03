var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./assets/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        grid: true,
        browsers: ['>1%'],
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.', {
        sourceRoot: './assets/sass/'
    }))
    .pipe(gulp.dest('./assets/css/'))
	.pipe(browserSync.reload({stream: true}));
});


// gulp.task('cssmin', function() {
//     return gulp.src('./assets/css/style.css')
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./assets/css/'))
// 	.pipe(browserSync.reload({stream: true}));
// });

gulp.task('watch', function () {
    browserSync.init({
        proxy: "localhost/www/cupwiz"
    });

    gulp.watch(['./assets/**/*.scss'], gulp.series('sass'));
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});



