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

