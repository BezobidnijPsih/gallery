require('angular');
var StartController = require('./controllers/start');

var app = angular.module('app', []);
app.controller('StartController', ['$scope', StartController]);