
require('../dataservices/album');
var app = angular.module('app');
app.controller('AlbumsController', ['$scope','AlbumDataservice',function($scope, AlbumDataservice) {
    console.log("controller");
    $scope.albums = AlbumDataservice.getAll();
}]);