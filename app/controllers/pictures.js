
var _ = require("underscore");

var app = angular.module('app');
app.controller('PicturesController', ['$scope','AlbumDataservice','$routeParams',
    function ($scope, AlbumDataservice, $routeParams) {
        $scope.album = {};
        $scope.albumId = $routeParams.albumId;

        //lalala, let's suppose it's a promise
        $scope.album = AlbumDataservice.get($scope.albumId);

    }]);
