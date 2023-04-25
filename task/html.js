const { src, dest } = require('gulp');

// Конфігурація
const path = require("../config/path.js");
const app = require("../config/app.js");


// Плагіни
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const webpHtml = require('gulp-webp-html');

// Обробка HTML

const html = () => {
  return src(path.html.src)
        .pipe(plumber({
          errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
          }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(htmlmin(app.htmlmin))
        .pipe(dest(path.html.dest))
}

module.exports = html;