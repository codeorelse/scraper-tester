module.exports = {
    isOfCurrency : function(data, currency) {
        return data.trim().indexOf(currency) == 0;
    }
}