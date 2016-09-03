/* global angular */

angular.module('durandal', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })

    .state('tournaments', {
      url: '/tournaments/{id}',
      templateUrl: '/tournaments.html',
      controller: 'TournamentsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])

.factory('tournaments', [function(){
  var o = {
    tournaments: []
  };
  return o;
}])

.controller('MainCtrl', [
'$scope',
'tournaments',
function($scope, tournaments){
  $scope.test = 'Hello world';
  
  $scope.tournaments = tournaments.tournaments;
  
  $scope.addTournament = function() {
    // Quit if the title or weapon field is blank.
    if(!$scope.title || $scope.title === '' ||
       !$scope.weapon || $scope.weapon === '') { 
           return;
    }
    
    $scope.tournaments.push({
        title: $scope.title,
        weapon: $scope.weapon,
        fencers: [
            {firstname: "Joe",
             lastname: "Smith",
             rating: "A",
             rating_year: 2016},
            {firstname: "Bill",
             lastname: "Danko",
             rating: "B",
             rating_year: 2014}
            ]
    });  
    
    // Clear form fields.
    $scope.title = '';
    $scope.weapon = '';
  };
}])

.controller('TournamentsCtrl', [
'$scope',
'$stateParams',
'tournaments',
function($scope, $stateParams, tournaments){
    $scope.tournament = tournaments.tournaments[$stateParams.id];
    
    $scope.addFencer = function(){
        $scope.tournament.fencers.push({
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            rating: $scope.rating,
            rating_year: $scope.rating_year
        });
        
        // Clear fields.
        $scope.firstname = '';
        $scope.lastname = '';
        $scope.rating = '';
        $scope.rating_year = '';
    };
    
    
}]);