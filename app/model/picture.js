var app = angular.module('app');
app.factory('Picture', [ function() {
    function Picture(pictureData) {
        if (pictureData) {
            this.setData(pictureData);
        }
    };
    Picture.prototype = {
        setData: function(pictureData) {
            this.name = pictureData.title;
            this.id = pictureData.id;
            this.albumId = pictureData.albumId;
            this.url = pictureData.url;
            this.thumbnailUrl = pictureData.thumbnailUrl;
        }
    };
    return Picture;
}]);

