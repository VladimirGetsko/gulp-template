module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },
    
    pug: {
        pretty: true, // для сжатия файла передать false
        data: {
            news: require('../data/news.json')
        }
    },

    webpack: {
        mode: "production" // "production" or "development"
    },

    imagemin: {
        verbose: true
    }
};