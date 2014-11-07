window.retrieveScraperData = function()  {

    return {
        'name' : $('h1').text(),
        'custom1' : '',
        'custom2' : '',
        'description' : '',
        'priceNormal' : $('.price-current').text(),
        'priceDiscount' : '',
        'imageUrl' : $('#detail-image img').first().attr('src')
    }
}