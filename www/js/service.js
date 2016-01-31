/* Services */
var numerologyServices = angular.module('numerologyServices', []);


//Factory for numerology service operations
numerologyServices.factory ('NumerologyService', function (CalculatorService, _, $http, $q) {
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
	factory.evaluateExpression = function(numerology) {
		var expressionNo  = 0;

		//console.log("Name : " + numerology.name);
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

		if(expressionNo.toString().length > 1) {
			console.log("Reduce to single digit : " + expressionNo);
		}
		//console.log("Digit Length : " + expressionNo.length);
		/*
		while (NumerologyUtil.isMultiDigit(expression)) {
			expression = deriveNumerologyDigit(expression);
		}
		*/

		return expressionNo;
	}

	//Load List of Tools
	factory.loadToolList = function() {
		console.log('Load Tool List From Filesystem');
		return $http.get('files/tools.json');
	};


	//Collect list of tools 
	factory.collectTools = function() {
		var deferred = $q.defer();
		var promise = this.loadToolList();
   		promise.then(
      		function(payload) { 
          		tools = payload.data;
				if(tools) {
					//cacheService.put(key, categories);
				}
          		deferred.resolve({tools: tools});
      		},
      		function(errorPayload) {
      			console.log('Failure loading categories ' + errorPayload);
      			deferred.reject(errorPayload);
      		});

		/*
		var key = 'numer-tools';
		var categories = cacheService.get(key);
		if(!categories) {
			var promise = this.loadCategories();
       		promise.then(
          		function(payload) { 
              		categories = payload.data;
					if(categories) {
						cacheService.put(key, categories);
					}
              		deferred.resolve({categories: categories});
          		},
          		function(errorPayload) {
          			console.log('Failure loading categories ' + errorPayload);
          			deferred.reject(errorPayload);
          		});
		} else {
			deferred.resolve({categories: categories});
		}
		*/
		return deferred.promise;
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
		//console.log("Calculate Value for " + inputChar);
		value = 5;

		return value;
	}


	//Derive Single Digit
	factoryCalc.deriveSingleDigit = function(digit) {
		var singleDigit = 0;

		//FIXME - Derive Single Digit

		return singleDigit;
	}


    return factoryCalc;
}); 
