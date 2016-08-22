var _ = require("underscore");
require("../model/picture");

var app = angular.module('app');
var urls = {
    pictures: 'http://jsonplaceholder.typicode.com/photos/'
};
app.factory('PictureDataservice', ['$http', 'Picture', function ($http, Picture) {
    return {
        getAll: function () {
            return $http.get(urls.pictures).then(function (data) {
                var result = [];
                _.each(data.data, function (pictureData) {
                    var picture = new Picture(pictureData);
                    result.push(picture)
                });
                return result;
            })
        }
    }
}]);
