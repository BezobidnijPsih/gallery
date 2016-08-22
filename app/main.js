require('angular');
require('angular-route');
jQuery = require('jquery');
require('bootstrap');



var app = angular.module('app', ['ngRoute']);

//controllers
require('./controllers/albums');
require('./controllers/pictures');

app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('gallery');
        // routes
        $routeProvider
            .when("/", {
                templateUrl: "./views/albums.html",
                controller: "AlbumsController"
            })
            .when("/album/:albumId", {
                templateUrl: "./views/pictures.html",
                controller: "PicturesController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);



