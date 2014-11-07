
var isOfCurrency = require('../utils/currency').isOfCurrency;
var getScraperData = require('../utils/scraper').getScraperData;
var isImage = require('../utils/image').isImage;

casper.test.begin('Test Jelmoli scraper on Laura Scott Hosenanzug (2 Stück)', 3, function suite(test) {
    var scrapedData = {};
    var productDetailPageUrl = 'http://www.jelmoli-shop.ch/Laura-Scott-Hosenanzug-2-Stueck/an28065680-sh20323679sp10032584861/JelmoliCh/de';

    casper.start(productDetailPageUrl, function() {
        // Get scraper data from the current page
        scrapedData = getScraperData(this.page, 'jelmoli');

        // Confirm the title is correct
        test.assertEqual(scrapedData.name, 'Laura Scott Hosenanzug (2 Stück)','The title is the name of the product');

        // Confirm the price is of the correct currency
        test.assert(isOfCurrency(scrapedData.priceNormal, 'CHF'), 'The normal price is CHF');

        // Confirm the image field is an actual image
        test.assert(isImage(scrapedData.imageUrl),'The image url is an actual image');

        test.done();
    });
})

casper.run();

