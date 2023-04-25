const del = require('del');

// Конфігурація
const path = require("../config/path.js")

// Видалення директорій
const clear = () => {
  return del(path.root);
}
module.exports = clear;