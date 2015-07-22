/* Services */
var numerologyServices = angular.module('numerologyServices', []);


//Factory for numerology service operations
numerologyServices.factory ('NumerologyService', function (CalculatorService, _) {
	var factory = {}; 
	
	//Calculate Numerology Numbers
	factory.calculateNumerology = function(numerology) {
		var result = {};

		result.lifepath = this.evaluateLifePath(numerology);
		result.expression = this.evaluateExpression(numerology);
		//FIXME - Destiny & Hearts Desire Number

		//result.lifepath = 5;
		//result.expression = 3;

		return result;
	}

	//Calculate LifePath Number
	factory.evaluateLifePath = function(numerology) {
		var lifePathNo  = 9;

		//FIXME - Evaluate Life Path

		return lifePathNo;
	}


	//Calculate Expression Number
	factory.evaluateExpression = function(numerology, _) {
		var expressionNo  = 0;

		console.log("Name : " + numerology.name);
		if(numerology.name) {
			var chars = numerology.name.split("");
			//console.log("Char Array: " + chars);

			$.each(chars, function(index, indvChar) { 
				if (indvChar && !indvChar.trim() == "") {
					//console.log("Char at: " + index +  " - " + indvChar);		
					expressionNo +=  CalculatorService.calculateValue(indvChar);
				}
			});

		}

		/*
		while (NumerologyUtil.isMultiDigit(expression)) {
			expression = deriveNumerologyDigit(expression);
		}
		*/

		return expressionNo;
	}



    return factory;
}); 


//Factory for Calculator
//TODO - Later Support Different Algorithm
numerologyServices.factory ('CalculatorService', function () {
	var factoryCalc = {}; 
	
	//Calculate Numerology Value
	factoryCalc.calculateValue = function(inputChar) {
		var value = 0;

		//FIXME - Calculate NUmerologu Value here
		console.log("Calculate Value for " + inputChar);
		value = 5;

		return value;
	}

    return factoryCalc;
}); 
