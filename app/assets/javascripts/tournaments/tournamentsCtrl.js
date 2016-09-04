/* global angular */

angular.module('durandal')
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