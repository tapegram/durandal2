/* global angular */

angular.module('durandal', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })

    .state('tournaments', {
      url: '/tournaments/{id}',
      templateUrl: 'tournaments/_tournaments.html',
      controller: 'TournamentsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);



