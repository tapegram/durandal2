/* global angular */

angular.module('durandal')
.controller('TournamentsCtrl', [
'$scope',
'tournaments',
'tournament',
function($scope, tournaments, tournament){
    $scope.tournament = tournament;
    
    $scope.addFencer = function(){
        if ($scope.firstname === '' ||
            $scope.lastname === '' ||
            $scope.rating === '' ||
            $scope.rating_year === ''){
                return;
            }
        
        tournaments.addFencer(tournament.id, {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            rating: $scope.rating,
            rating_year: $scope.rating_year
        }).success(function(fencer) {
            $scope.tournament.fencers.push(fencer);
        });
        
        // Clear fields.
        $scope.firstname = '';
        $scope.lastname = '';
        $scope.rating = '';
        $scope.rating_year = '';
    };
    
    
}]);