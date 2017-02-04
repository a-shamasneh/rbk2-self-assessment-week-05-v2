angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function(num){
  	
  	return{
  		incCount:function(num) {
  			return num++;
  		}
  	}
  })
  .controller('fizzbuzzCtrl', function(counter){
  	$scope.count=0;
   $scope.click=function ($scope.count) {
    counter.incCount($scope.count);
   }

  })


  .controller('fozzbazzCtrl', function(counter){

    $scope.count=0;
   $scope.click=function ($scope.count) {
    counter.incCount($scope.count);
   }
  });
