/* global angular */

angular.module('durandal')
.factory('pools', [
'$http',
function($http){
  var o = {
    pools: [],
    defaultPoolSize: 7,
    poolSizes: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  };
  
  o.getPools = function(fencers, targetPoolSize){
        // Sort fencers by rating. Todo: also sort by rating year.
        fencers.sort(function(a, b) { 
            return a.rating - b.rating;
        });
        
        // How many pools do we need to create?
        var numPools = Math.floor(fencers.length / targetPoolSize);
        if (numPools < 1) numPools = 1;
        
        // Generate a list of numPools empty pools.
        o.pools = [];
        for (var i = 0; i < numPools; i++) { 
            o.pools.push([]);
        }
        
        // Now put each fencer into a pool.
        for (var i = 0; i < fencers.length; i++) {
            o.pools[i % numPools].push(fencers[i]);
        }
        
        return o.pools;
  };
  
  o.savePools = function(id, p) {
    return $http.post('/tournaments/' + id + '/pools.json', {"pools": p});
  };
  
  return o;
}]);