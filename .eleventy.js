const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    
    //css targets 
    eleventyConfig.addPassthroughCopy("./local/css");
    eleventyConfig.addWatchTarget("./local/css");


    //favicons/media
    eleventyConfig.addPassthroughCopy("./local/assets");
    eleventyConfig.addWatchTarget("./local/assets");

    //date
    eleventyConfig.addFilter('htmlDateString', dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat('yyyy/MM/dd TT');
    });

    eleventyConfig.addFilter('journalDateString', dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat('yyyy/MM/dd');
    });

    return {
        dir: {
            input: "local",
            output: "public",
        }
    }
}