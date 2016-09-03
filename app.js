/* global angular */

angular.module('durandal', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world';
  
  $scope.tournaments = [
      {title: 'tournament 1', weapon: "Epee"},
      {title: 'tournament 2', weapon: "Foil"},
      {title: 'tournament 3', weapon: "Sabre"},
      {title: 'tournament 4', weapon: "Epee"},
      {title: 'tournament 5', weapon: "foil"}
    ];
    
  $scope.addTournament = function() {
    // Quit if the title or weapon field is blank.
    if(!$scope.title || $scope.title === '' ||
       !$scope.weapon || $scope.weapon === '') { 
           return;
    }
    
    $scope.tournaments.push({
        title: $scope.title,
        weapon: $scope.weapon
    });  
    
    // Clear form fields.
    $scope.title = '';
    $scope.weapon = '';
  };
}]);