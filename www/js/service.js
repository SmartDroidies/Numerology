/* Services */
var numerologyServices = angular.module('numerologyServices', []);


//Factory for numerology service operations
numerologyServices.factory ('NumerologyService', function () {
	var factory = {}; 
	
	//Calculate Numerology Numbers
	factory.calculateNumerology = function(numerology) {
		var result = {};

		result.lifepath = 5;
		result.expression = 3;

		return result;
	}

    return factory;
}); 


