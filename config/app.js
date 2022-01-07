const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },
    
    pug: {
        pretty: isDev, // для сжатия файла передать false
        data: {
            news: require('../data/news.json')
        }
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
};