var app = angular.module('app');
app.factory('Album', [function() {
    function Album(albumData) {
        if (albumData) {
            this.setData(albumData);
        }
    };
    Album.prototype = {
        setData: function(albumData) {
            this.name = albumData.title;
            this.id = albumData.id;
            this.userId = albumData.userId;
        }
    };
    return Album;
}]);
console.log("model");
