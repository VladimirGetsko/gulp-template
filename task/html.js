const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const webpHtml = require('gulp-webp-html');

// Обработка HTML
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(webpHtml())
    .pipe(fileInclude())
    .pipe(htmlmin(app.htmlmin)) // плагин минификации
    .pipe(dest(path.html.dest));
};

module.exports = html;