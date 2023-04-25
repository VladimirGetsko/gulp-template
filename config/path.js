const partSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,

  html: {
    src: partSrc + "/html/*.html",
    watch: partSrc + "/html/**/*.html",
    dest: pathDest
  },

  css: {
    src: partSrc + "/css/*.css",
    watch: partSrc + "/css/**/*.css",
    dest: pathDest + "/css"
  },

  scss: {
    src: partSrc + "/sass/*.{sass,scss}",
    watch: partSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css"
  },

  js: {
    src: partSrc + "/js/*.js",
    watch: partSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  img: {
    src: partSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: partSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img"
  },

  font: {
    src: partSrc + "/font/*.{eot,ttf,otf,woff,woff2,svg}",
    watch: partSrc + "/font/**/*.{eot,ttf,otf,woff,woff2,svg}",
    dest: pathDest + "/font"
  },
}