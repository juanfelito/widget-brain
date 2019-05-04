'use strict';

// Declare app level module which depends on views, and core components
angular.module('widgetBrain', [
  'ngRoute',
  'widgetBrain.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);