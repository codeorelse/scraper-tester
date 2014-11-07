module.exports = {
    getScraperData : function(page, client) {
        page.injectJs('source/'+client+'_scraper.js');

        var scrapedData = page.evaluate(function() {
            return window.retrieveScraperData.call();
        })

        return scrapedData;

    }
}