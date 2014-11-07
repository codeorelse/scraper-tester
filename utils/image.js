module.exports = {
    isImage : function(data) {
        // Naive implementation, just for demo purposes :)
        return data.trim().indexOf('.jpg') > -1;
    }
}