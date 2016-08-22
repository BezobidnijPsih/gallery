var _ = require("underscore");
require("../model/album");

var app = angular.module('app');
app.factory('AlbumDataservice',['$http','Album',function($http, Album){
    return {
        getAll: function() {
            $http.get('http://jsonplaceholder.typicode.com/albums/').then(function(data){
                debugger;
                var result = [];
                _.each(data, function(albumData){
                    var album = new Album(albumData);
                    result.push(album)
                });
                return result;
            })
        }
    }
}]);
console.log("dataservice");
