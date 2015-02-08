'use strict';
/**
 * @ngdoc function
 * @name beerAppApp.controller:beerCtrl
 * @description
 * # beerCtrl
 * Controller of the beerAppApp
 */


beerAppApp.controller('beerCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/beers.json').success(function(data) {
      	angular.forEach(data, function(b) {
          if (b.id == $routeParams.beerId) 
            $scope.beer = b;
        	
        });
    });

}]);