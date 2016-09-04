/* global angular */

angular.module('durandal')
.controller('MainCtrl', [
'$scope',
'tournaments',
function($scope, tournaments){
  $scope.name = '';
  
  $scope.tournaments = tournaments.tournaments;
  
  $scope.addTournament = function() {
    // Quit if the name or weapon field is blank.
    if(!$scope.name || $scope.name === '' ||
       !$scope.weapon || $scope.weapon === '') { 
           return;
    }
    
    tournaments.create({
        name: $scope.name,
        weapon: $scope.weapon,
    })
    
    // Clear form fields.
    $scope.name = '';
    $scope.weapon = '';
  };
}]);