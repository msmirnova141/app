var myApp = angular.module('myApp',[]);

var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }    
    }
    return result;
};

beerAppApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}); 

function sort2($scope, filterFilter) {
  $scope.useType = {};
  $scope.useRegion = {};
  $scope.beers = [
  {
          name:'33 ACRES OF DARKNESS SCHWARZBIER',
          info: '', 
          type:'Larger', 
          "status":'98', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'SMOOTH CRIMINAL',
          info: 'Dry Irish Stout', 
          type:'Stout', "status":'92', 
          "region":'BC', 
          favorite: 'Deep Cove Brewers + Distillers'
        },
        {
          name:'FAT TUG IPA',
          info: '', 
          type:'India Pale Ale', 
          "status":'90', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'ALE',
          info: '', 
          type:'Pale ale', 
          "status":'85', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'THE IMMORTAL IPA',
          info: '', 
          type:'India Pale Ale', 
          "status":'84', 
          "region":'WA', 
          favorite: 'false'
        },
        {
          name:'SCRUMPY', 
          type:'Cider',
          info: '', 
          "status":'78', 
          "region":'BC', 
          favorite: 'false'
        },
        {
          name:'HOPARAZZI INDIA PALE LAGER',
          info: '', 
          type:'Larger', 
          "status":'77', 
          "region":'BC', 
          favorite: 'false'
        },        
         {
          name:'PILSNER',
          info: '', 
          type:'Larger', 
          "status":'74', 
          "region":'BC', 
          favorite: 'false'
        },
        {
          name:'TRADITIONAL CIDER', 
          info: '',
          type:'Cider', 
          "status":'73', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'LIGHTS OUT STOUT',
          info: '', 
          type:'Stout', 
          "status":'66', 
          "region":'Oregon', 
          favorite: 'favorite'
        },
        {
          name:'33 ACRES OF OCEAN', 
          info: 'West Coast Pale ale', 
          type:'Pale ale', 
          "status":'41', 
          "region":'BC', 
          favorite: 'favorite'
        },
        {
          name:'HALLELUJAH HOPRICOT CIDER', 
          info: '',
          type:'Cider', 
          "status":'39', 
          "region":'Oregon', 
          favorite: 'favorite'
        },
         {
          name:'GO TO IPA',
          info: '', 
          type:'India Pale Ale', 
          "status":'24', 
          "region":'CA', 
          favorite: 'false'
        },
         {
          name:'N2 SERIES',
          info: 'Milk Stout', 
          type:'Stout', 
          "status":'23', 
          "region":'BC', 
          favorite: 'false'},
         {
          name:'AMNESIAC DOUBLE IPA',
          info: '', 
          type:'India Pale Ale', 
          "status":'17', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'OLD RASPUTIN',
          info: 'Russian Imperial Stout', 
          type:'Stout', 
          "status":'16', 
          "region":'CA', 
          favorite: 'false'},
         {
          name:'PERFECT STORM',
          info: 'Outmeal Stout', 
          type:'Stout', 
          "status":'13', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'LARGER',
          info: '', 
          type:'Larger', 
          "status":'13', 
          "region":'BC', 
          favorite: 'false'
        },
         {
          name:'EURO TRASH IPL',
          info: '', 
          type:'Larger', 
          "status":'11', 
          "region":'Oregon', 
          favorite: 'false'
        },
         {
          name:'HOPDEMONIUM IPA',
          info: '', 
          type:'india Pale Ale', 
          "status":'10', 
          "region":'BC', 
          favorite: 'false'
        },
  ];
  $scope.$watch(function () {
    return {
      beers: $scope.beers,
      useType: $scope.useType,
      useRegion: $scope.useRegion
    }
  }, function (value) {
    var selected;
    $scope.typeGroup = uniqueItems($scope.beers, 'type');
    var filterAfterType = [];
    selected = false;
    for (var j in $scope.beers) {
      var p = $scope.beers[j];
      for (var i in $scope.useType) {
        if (scope.useType[i]) {
        selected = true;
        if (i == p.type) {
          filterAfterType.push(p);
          break;
        }
      }
    }
  }
  if (!selected) {
    filterAfterPants = $scope.beers;
  }
  $scope.regionGroup = uniqueItems(filterAfterType, 'region');
  var filterAfterRegion = [];
  selected = false;
  for (var j in filterAfterType) {
    var p = filterAfterType[j];
    for (var i in $scope.useRegion) {
      if ($scope.useRegion[i]) {
        selected = true;
        if (i == p.region) {
          filterAfterRegion.push(p);
          break;
        }
      }
    }
  }
  if (!selected) {
    filterAfterRegion = filterAfterType;
  }
  $scope.filteredBeers = filterAfterRegion;
}, true);
$scope.$watch('filtered', function(newValue){
  if (angular.isArray(newValue)) {
    console.log(newValue.length);
  }
}, true);
}
myApp.filter('count', function() {
  return function(collection, key) {
    var out ="test";
    for (var i = 0; i < collection.length; i++) {
    }
    return out;
  }
});
myApp.filter('groupBy',
  function() {
    return function (collection, key) {
      if (collection ==null) return;
      return uniqueItems(collection, key);
    };
  });

