const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const webpCss = require('gulp-webp-css');

// Обработка SCSS
const scss = () => {
    return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.scss.dest), { sourcemaps: app.isDev })
    .pipe(rename({ suffix:".min" }))
    .pipe(csso())
    .pipe(dest(path.scss.dest), { sourcemaps: app.isDev });
};

module.exports = scss;