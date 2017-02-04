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
  	$scope.result="";
  	$scope.counter=0;
  	return{
  		incCount:function(num) {
  			return num++;
  		},
  		testnum:function(num){//// this metod work for two pages 
  			if(num%2!=0){// test if number even or odd
  				if(num%3==0 && num%5==0){
  					result="FIZZBUZZ";
  				}
  				if(num%3==0 && num%5!==0){
  					result="FIZZ"
  				}
  				if(num%3!==0 && num%5==0){
  					result="BUZZ"
  				}
  			}
  			else{//// if number is even 

  				if(num%4==0 && num%6==0){
  					result="FOZZBAZZ"
  				}
  				if(num%4==0 && num%6!==0){
  					result="FOZZ"
  				}
  				if(num%4!==0 && num%6==0){
  					result="BAZZ"
  				}
  			}
  		}
  	}
  })
  .controller('fizzbuzzCtrl', function(counter){
  	$scope.count=0;
   $scope.click=function ($scope.count) {
    counter.incCount($scope.count);
    return $scope.count;
   }
   $scope.result=function(){
   	counter.testnum($scope.count);
   }

  })


  .controller('fozzbazzCtrl', function(counter){

    $scope.count=0;
   $scope.click=function ($scope.count) {
    counter.incCount($scope.count);
    return scope.count;
   }
   $scope.result=function(){
   	countr.testnum($scope.count);
   }
  });
