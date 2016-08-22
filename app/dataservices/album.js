var _ = require("underscore");
require("../model/album");

var app = angular.module('app');
var urls = {
    albums: 'http://jsonplaceholder.typicode.com/albums/'
};
app.factory('AlbumDataservice', ['$http', 'Album', function ($http, Album) {
    //I would prefer to use a separate package called context for this
    //it would be called from the controllers instead of the dataservice
    //it would load the data when called for the first time
    //then just return the stored objects
    //but it's a test task, so I will just save the data to an array :)
    var albums = [];
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
