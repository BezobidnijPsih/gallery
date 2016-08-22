require('../dataservices/album');
require('../dataservices/picture');
var _ = require("underscore");

var app = angular.module('app');
app.controller('AlbumsController', ['$scope', 'AlbumDataservice', 'PictureDataservice',
    function ($scope, AlbumDataservice, PictureDataservice) {
        $scope.albums = [];
        AlbumDataservice.getAll().then(function (data) {
            $scope.albums = data;
            PictureDataservice.getAll().then(function(data){
                _.each(data, function(picture){
                    var album =_.find($scope.albums, {id:picture.albumId});
                    album.pictures.push(picture);
                })
            });
        });
    }]);