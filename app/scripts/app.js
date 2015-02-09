'use strict';

/**
 * @ngdoc overview
 * @name beerAppApp
 * @description
 * # beerAppApp
 *
 * Main module of the application.
 */
var beerAppApp = angular
  .module('beerAppApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  
beerAppApp.config(function ($routeProvider) {
  $routeProvider
    .when('/beermenu', {
      templateUrl: 'views/beermenu.html',
      controller: 'MainCtrl'
    })
    .when('/beer/:beerId', {
      templateUrl: 'views/beerinfo.html',
      controller: 'beerCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/beermenu'
    });
});

beerAppApp.config(function($mdThemingProvider) {
$mdThemingProvider.theme('default')
  .primaryColor('orange')
  .accentColor('grey');
});
