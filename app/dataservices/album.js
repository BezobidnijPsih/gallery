var _ = require("underscore");
require("../model/album");

var app = angular.module('app');
var urls = {
    albums: 'http://jsonplaceholder.typicode.com/albums/'
};
app.factory('AlbumDataservice', ['$http', 'Album', function ($http, Album) {
    return {
        getAll: function () {
            return $http.get(urls.albums).then(function (data) {
                var result = [];
                _.each(data.data, function (albumData) {
                    var album = new Album(albumData);
                    result.push(album)
                });
                return result;
            })
        }
    }
}]);
