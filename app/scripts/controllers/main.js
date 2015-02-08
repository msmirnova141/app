'use strict';
/**
 * @ngdoc function
 * @name beerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerAppApp
 */



beerAppApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = {
      selectedIndex : 0
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
      console.log(selectedIndex);
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
      console.log(selectedIndex);
    };
}); 

beerAppApp.controller('sort2', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $scope.beers = [];
    $scope.favorites = [];
     $scope.addItem = function(index) {
        $scope.favorites.push($scope.beers[index]);
        //$scope.beers.splice(index,1);
  };
  $scope.removeItem = function(index) {
    $scope.beers.push($scope.favorites[index]);
    $scope.favorites.splice(index, 1);
  };

    $scope.query = {};
    $scope.queryBy = '$';
    $http.get('json/beers.json').success(function(data) {
      $scope.beers = data;
      $scope.predicate = '-status';
    });
    $scope.predicate = '-status';

    var orderBy = $filter('orderBy');
    $scope.order = function(predicate, reverse) {
      $scope.beers = orderBy($scope.beers, predicate, reverse);
    };
    $scope.order('-status', false);

    $scope.filter = {};
    $scope.getType = function() {
      return($scope.beers || []).map(function (b) {
        return b.type;
      }).filter(function (b, idx, arr) {
        return arr.indexOf(b) === idx;
      });
    };
    $scope.filterByType = function(beer) {
      return $scope.filter[beer.type] || noFilter($scope.filter);
    };

    function noFilter(filterObj) {
      for (var key in filterObj) {
        if (filterObj[key]) {
          return false;
        }
      }
      return true;
    };

    
}]); 


beerAppApp.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('right').close()
                        .then(function(){
                          $log.debug("close RIGHT is done");
                        });
  };
});

beerAppApp.controller('beerCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.beerId = $routeParams.beerId;
  }]);

