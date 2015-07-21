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


//Controller for Numerology
numerologyControllers.controller('NumerologyCtrl', ['$scope',  'NumerologyService', 
  function($scope, numerService) {
	$scope.display = function () {         
		console.log("Display Screen For Numerology");		
	}

	$scope.calculate = function (numerology) {         
		
		console.log("Calculate Numerology");

		var result = numerService.calculateNumerology(numerology); 
		
		//FIXME - Write Service to calculate 
		//var result = {};
		//result.lifepath = 10;
		//result.expression = 5;

		numerology.result = result;
		$scope.numerology = numerology;

	}
	
	
	
	//Show Home
	$scope.display();
}]);

//Controller for Compatibility
numerologyControllers.controller('CompatibilityCtrl', ['$scope', 
  function($scope) {
	$scope.displayCompat = function () {         
		console.log("Display Screen For Compatibility Calculator");		
	}
	
	
	//Show Home
	$scope.displayCompat();
}]);


//Controller for Calculator
numerologyControllers.controller('CalculatorCtrl', ['$scope', 
  function($scope) {
	$scope.displayCalc = function () {         
		console.log("Display Screen For Numerology Calculator");		
	}
	
	
	//Show Home
	$scope.displayCalc();
}]);

//Controller for Knowledge
numerologyControllers.controller('KnowledgeCtrl', ['$scope', 
  function($scope) {
	$scope.displayKnowledge = function () {         
		console.log("Display Screen For Knowledge");		
	}
	
	
	//Show Home
	$scope.displayKnowledge();
}]);







