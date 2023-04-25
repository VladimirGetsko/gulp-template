const { src, dest } = require('gulp');

// Конфігурація
const path = require("../config/path.js");
const app = require("../config/app.js");


// Плагіни
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// Обробка JavaSctipt

const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev})
        .pipe(plumber({
          errorHandler: notify.onError(error => ({
            title: "JavaSctipt",
            message: error.message
          }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev}))
}

module.exports = js;