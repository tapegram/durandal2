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
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['tournaments', function(tournaments){
          return tournaments.getAll();
        }]
      }
    })

    .state('tournaments', {
      url: '/tournaments/{id}',
      templateUrl: 'tournaments/_tournaments.html',
      controller: 'TournamentsCtrl',
      resolve: {
        tournament: ['$stateParams', 'tournaments', function($stateParams, tournaments) {
          return tournaments.get($stateParams.id);
        }]
      }
    })
    
    .state('pools', {
      url: '/tournaments/{id}/pools',
      templateUrl: 'pools/_pools.html',
      controller: 'PoolsCtrl',
      resolve: {
        tournament: ['$stateParams', 'tournaments', function($stateParams, tournaments) {
          return tournaments.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}]);



