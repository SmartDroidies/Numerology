'use strict';

/* Controllers */

var numerologyControllers = angular.module('numerologyControllers', []);

numerologyControllers.controller('HomeCtrl', ['$scope', '$rootScope', 'NumerologyService',
  function($scope, $rootScope, numerService) {

	$scope.showHome = function () {         
		if($rootScope.tab == 1) { 
			$scope.calculator();
		} else if ($rootScope.tab == 2) {
			$scope.compatibility();	
		} else if ($rootScope.tab == 3) {
			$scope.toollist();
		} else if ($rootScope.tab == 4) {
			$scope.knowledge();
		} 	
	}

	//Show or Hide Menu
	$scope.showMenu = function () {
		if($("#menu").is(":visible")) {
			hidePopup();
		} else {
			$("#menu").show(300);
			$("#setting").hide();
		}
	};	

	//Show or Hide Setting
	$scope.showSetting = function () {
		if($("#setting").is(":visible")) {
			hidePopup();
		} else {
			$("#setting").show(300);
			$("#menu").hide();
		}
	};	

	//Share the app link with user
	$scope.share = function () {
		window.plugins.socialsharing.share('Try this great App - ', 'Numerology',null,'https://play.google.com/store/apps/details?id=com.smart.droidies.nmrlogy');
		hidePopup();
	}

	//Rate App
	$scope.rate = function () {
		var version = device.platform;
		hidePopup();
		if(version == "Android") {
			var url = "market://details?id=com.smart.droidies.nmrlogy";
	        window.open(url,"_system");		
		} else {
			//var url = "https://play.google.com/store/apps/details?id=com.smart.droidies.nmrlogy"
		}	
	}

	//Provide Feedback
	$scope.feedback = function () {
		window.plugin.email.open({
			to:      ['smartdroidies@gmail.com'],
			subject: 'Feedback on Numerology',
			body:    '',
			isHtml:  true
		});
		hidePopup();
	}

	$scope.calculate = function (numerology) {         
		if(numerology && (numerology.name || numerology.dob)) {
			console.log("Calculate Numerology : " + numerology.name + " - " + numerology.dob);
			var result = numerService.calculateNumerology(numerology); 
			numerology.result = result;
			numerology.result.available = true;
			$scope.numerology = numerology;
		} else {
			alert("Enter either Name or Date Of Birth");
		}
	}

	//Display Calculator Tab
	$scope.calculator = function () {         
		$rootScope.tab = 1;
	}

	//Display Compatibility Tab
	$scope.compatibility = function () {         
		$rootScope.tab = 2;
	}

	//Display Tools
	$scope.toollist = function () {
		$rootScope.tab = 3;
		//Check if tools are initialized
		//console.log('Collecting tool list');
		var promise =  numerService.collectTools();
		promise.then (
  			function(data) {
			 	$scope.tools = data.tools;
			 	//console.log('Tools : ' +  $scope.tools);
  			},
  			function(error) {
    			console.log('No Tools Found.');
  			});

	}

	//Display Knowledge
	$scope.knowledge = function () {         
		$rootScope.tab = 4;
	}

	//Set Default Tab to Category Listing
	if(!$rootScope.tab) {
		$rootScope.tab = 1;
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


//Controller for Tools
numerologyControllers.controller('ToolsCtrl', ['$scope',  'NumerologyService', 
  function($scope, numerService) {
	$scope.display = function () {         
		console.log("Display Tool Item Details");		
		$scope.name = "-";
	}
	
	$scope.evaluate = function(numerology) {
		$scope.name = numerService.evaluateExpression(numerology);
		//console.log(numerology.name);
	} 

	$scope.wishlist = function(numerology) {
		//console.log("Add name to Wishlist : " + numerology.name + " - " + $scope.name)
		var wished = [];
		if($scope.wished && _.size($scope.wished)) {
			wished = $scope.wished;
		} 

		//FIXME - Ensure that the name is already not added in the wishlist  
		wished.push({name: numerology.name, number: $scope.name});

		$scope.wished = wished;
		//console.log("Wishlist : " + JSON.stringify($scope.wished));
	} 

	$scope.removeWishlist = function(name) {
		//console.log("Remove item from Wishlist : " + name)
		var wished = [];
		if($scope.wished) {
			wished = $scope.wished;
			wished = _.filter(wished, function(item) {
			     return item.name != name;
			});		
			$scope.wished = wished;	
			//console.log("Wishlist Size : " + _.size(wished));
		} 
	} 

	//Show Home
	$scope.display();
}]);

