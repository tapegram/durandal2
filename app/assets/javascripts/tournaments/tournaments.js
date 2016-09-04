/* global angular */

angular.module('durandal')
.factory('tournaments', [
'$http',
function($http){
  var o = {
    tournaments: []
  };
  
  o.getAll = function() {
    return $http.get('/tournaments.json').success(function(data){
      angular.copy(data, o.tournaments);
    });
  };
  
  o.create = function(tournament) {
    return $http.post('/tournaments.json', tournament).success(function(data){
      o.tournaments.push(data);
    });
  };
  
  o.get = function(id) {
    return $http.get('/tournaments/' + id + '.json').then(function(res){
      return res.data;
    });
  };
  
  o.addFencer = function(id, fencer) {
    return $http.post('/tournaments/' + id + '/fencers.json', fencer);
  };
  
  return o;
}]);