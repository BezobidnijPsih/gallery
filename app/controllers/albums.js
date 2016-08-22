require('../dataservices/album');
var _ = require("underscore");

var app = angular.module('app');
app.controller('AlbumsController', ['$scope', 'AlbumDataservice',
    function ($scope, AlbumDataservice) {
        $scope.albums = [];
        AlbumDataservice.getAll().then(function (data) {
            $scope.albums = data;
        });
    }]);