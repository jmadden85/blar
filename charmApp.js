'use strict';
angular.module('Charm', [
  'ngResource'
])
.controller('MainCtrl', function ($scope, NavService) {
  $scope.navLinks = [
    {id: 0, name: 'About', url: '/about'},
    {id: 1, name: 'Rooms', url: '/rooms'},
    {id: 2, name: 'Meetings & Events', url: '/meetings'},
    {id: 3, name: 'Neighborhood', url: '/neighborhood'},
    {id: 3, name: 'Blog', url: '/blog'},
    {id: 3, name: 'Careers', url: '/careers'}
  ];
  $scope.navStuff = NavService.get();
  $scope.hello = 'world';
})
.factory('NavService', function ($resource) {
  var nav = $resource('/starter/server/navigation.json');

  return nav;
});
// .factory('NavService', function ($resource, $q) {
//   return {

//     service: function () {
//       return $resource('/starter/server/navigation.json',
//         {},
//         {
//           get: {
//             method : 'GET',
//             isArray: false
//           }
//         });
//     },
//     get: function () {
//       var deffered = $q.defer();

//       console.log('called');
//       this.service().get(function (response) {
//         console.log(response);
//         deffered.resolve(response);
//       });
//       return deffered.promise;
//     }
//   };
// });
