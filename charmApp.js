'use strict';
angular.module('Charm', [
  'ngResource'
])
.controller('MainCtrl', function ($scope, GetNav, GetHome) {

  GetNav.then(function (payload) {
    $scope.nav = payload.data[0].NAVIGATION;
  }, function (err) {
    console.log(err);
  });

  GetHome.then(function (payload) {
    $scope.home = payload.data[0];
  }, function (err) {
    console.log(err);
  });

})
.factory('GetHome', function ($http) {
  var promise = $http.get('/blar/server/home.json');

  return promise;
})
.factory('GetNav', function ($http) {
  var promise = $http.get('/blar/server/navigation.json');

  return promise;
});
