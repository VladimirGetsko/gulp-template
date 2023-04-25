const { src, dest } = require('gulp');

// Конфігурація
const path = require("../config/path.js");
const app = require("../config/app.js");


// Плагіни
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter-unx');
const ttf2woff2 = require('gulp-ttf2woff2');

// Обробка Font

const font = () => {
  return src(path.font.src)
        .pipe(plumber({
          errorHandler: notify.onError(error => ({
            title: "Font",
            message: error.message
          }))
        }))
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest));
}

module.exports = font;