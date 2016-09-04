/* global angular */

angular.module('durandal')
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
}]);