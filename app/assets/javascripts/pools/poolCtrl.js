/* global angular */

angular.module('durandal')
.controller('PoolsCtrl', [
'$scope',
'tournament',
'pools',
function($scope, tournament, pools){
    $scope.poolSize = pools.defaultPoolSize;
    $scope.poolSizes = pools.poolSizes;
    
    $scope.getPools = function(){
        $scope.pools = pools.getPools(tournament.fencers, $scope.poolSize);
    };
    
    $scope.pools = pools.getPools(tournament.fencers, $scope.poolSize);
    
    $scope.fencersInPool = function(pool) { return pool.length; };
}]);