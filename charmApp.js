'use strict';
angular.module('Charm', [
  'ngResource'
])
.controller('MainCtrl', function ($scope, NavService) {
  $scope.navLinks = NavService.query();
  $scope.hello = 'world';
})
.factory('NavService', function($resource) {
  return $resource('/blar/server/navigation.json');
});