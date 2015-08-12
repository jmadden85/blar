'use strict';
angular.module('Charm', [
  'ngResource'
])
.controller('MainCtrl', function ($scope, GetNav, GetHome) {
  $scope.nav = GetNav.query();
  $scope.home = GetHome.query();
})
.factory('GetNav', function($resource, $q) {
  var nav = $resource('/blar/server/navigation.json');

  return nav;
})
.factory('GetHome', function ($resource) {
  var home = $resource('/blar/server/home.json');

  return home;
})
