"use strict";var beerAppApp=angular.module("beerAppApp",["ngAnimate","ngAria","ngMessages","ngRoute","ngResource","ngSanitize","ngTouch","ngMaterial"]);beerAppApp.config(["$routeProvider",function(a){a.when("/beermenu",{templateUrl:"views/beermenu.html",controller:"MainCtrl"}).when("/beer/:beerId",{templateUrl:"views/beerinfo.html",controller:"beerCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/beermenu"})}]),beerAppApp.config(["$mdThemingProvider",function(a){a.theme("default").primaryColor("orange").accentColor("grey")}]),beerAppApp.controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.data={selectedIndex:0},a.next=function(){a.data.selectedIndex=Math.min(a.data.selectedIndex+1,2),console.log(selectedIndex)},a.previous=function(){a.data.selectedIndex=Math.max(a.data.selectedIndex-1,0),console.log(selectedIndex)}}]),beerAppApp.controller("sort2",["$scope","$filter","$http",function(a,b,c){function d(a){for(var b in a)if(a[b])return!1;return!0}a.beers=[],a.favorites=[],a.addItem=function(b){a.favorites.push(a.beers[b])},a.removeItem=function(b){a.beers.push(a.favorites[b]),a.favorites.splice(b,1)},a.query={},a.queryBy="$",c.get("json/beers.json").success(function(b){a.beers=b,a.predicate="-status"}),a.predicate="-status";var e=b("orderBy");a.order=function(b,c){a.beers=e(a.beers,b,c)},a.order("-status",!1),a.filter={},a.getType=function(){return(a.beers||[]).map(function(a){return a.type}).filter(function(a,b,c){return c.indexOf(a)===b})},a.filterByType=function(b){return a.filter[b.type]||d(a.filter)}}]),beerAppApp.controller("RightCtrl",["$scope","$timeout","$mdSidenav","$log",function(a,b,c,d){a.close=function(){c("right").close().then(function(){d.debug("close RIGHT is done")})}}]),beerAppApp.controller("beerCtrl",["$scope","$routeParams",function(a,b){a.beerId=b.beerId}]),beerAppApp.controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.logo={img:"images/logoSemiTrans.png"}}]),beerAppApp.controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),beerAppApp.controller("AppCtrl",["$scope","$timeout","$mdSidenav","$log",function(a,b,c,d){a.toggleLeft=function(){c("left").toggle().then(function(){d.debug("toggle left is done")})},a.toggleRight=function(){c("right").toggle().then(function(){d.debug("toggle RIGHT is done")})}}]),beerAppApp.controller("LeftCtrl",["$scope","$timeout","$mdSidenav","$log",function(a,b,c,d){a.close=function(){c("left").close().then(function(){d.debug("close LEFT is done")})}}]),beerAppApp.controller("RightCtrl",["$scope","$timeout","$mdSidenav","$log",function(a,b,c,d){a.close=function(){c("right").close().then(function(){d.debug("close RIGHT is done")})}}]),beerAppApp.controller("beerCtrl",["$scope","$routeParams","$http",function(a,b,c){c.get("json/beers.json").success(function(c){angular.forEach(c,function(c){c.id==b.beerId&&(a.beer=c)})})}]);