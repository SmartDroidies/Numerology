'use strict';

/* Controllers */

var numerologyControllers = angular.module('numerologyControllers', []);

numerologyControllers.controller('HomeCtrl', ['$scope', 
  function($scope) {
	$scope.showHome = function () {         
		$scope.name = "Divhya";	
	}
	
	
	//Show Home
	$scope.showHome();
}]);


numerologyControllers.controller('NumerologyCtrl', ['$scope', 
  function($scope) {
	$scope.display = function () {         
		console.log("Display Screen For Numerology");		
	}
	
	
	//Show Home
	$scope.display();
}]);



