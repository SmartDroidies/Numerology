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

		return result;
	}

	//Calculate LifePath Number
	factory.evaluateLifePath = function(numerology) {
		var lifePathNo  = 0;
		var sum = 0;
		if(numerology.dob) {
			//console.log("Evaluate Lifepath for : " + numerology.dob);
			var dobArray = (numerology.dob).split("-");
			//console.log("DOB Array : " + dobArray);
			for (i = 0; i < dobArray.length; i++) { 
				 sum += parseInt(dobArray[i]);
				 //console.log("Running Life Path : " + sum);
			}

			if(CalculatorService.isMultiDigit(sum)) {
				lifePathNo =  CalculatorService.deriveSingleDigit(sum);
			}

		}

		if(lifePathNo == 0) {
			lifePathNo = '-';
		}
		console.log("Lifepath for : " + numerology.dob + " - " + lifePathNo);
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

		if(CalculatorService.isMultiDigit(expressionNo)) {
			//console.log("Reduce to single digit : " + expressionNo);
			expressionNo =  CalculatorService.deriveSingleDigit(expressionNo);
			
		}

		return expressionNo;
	}

	//Load List of Tools
	factory.loadToolList = function() {
		//console.log('Load Tool List From Filesystem');
		return $http.get('files/tools.json');
	};

	//Load Number Qualities
	factory.loadQualities = function() {
		//console.log('Load Qualities From Filesystem');
		return $http.get('files/qualities.json');
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

	//Collect list of Qualities 
	factory.collectQualities = function() {
		var deferred = $q.defer();
		var promise = this.loadQualities();
   		promise.then(
      		function(payload) { 
          		qualities = payload.data;
				//if(qualities) {
					//cacheService.put(key, qualities);
				//}
          		deferred.resolve({qualities: qualities});
      		},
      		function(errorPayload) {
      			console.log('Failure loading qualities ' + errorPayload);
      			deferred.reject(errorPayload);
      		});
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
		if(inputChar.trim().length == 1) {
			inputChar = inputChar.toLowerCase();
			if(alphabetArray[inputChar] != undefined) { 
				value = alphabetArray[inputChar];
				//console.log("Calculate Value for : " + inputChar + " - " + value);
			} else {
				console.log("Ignored Invalid Input Character : " + inputChar);	
			}
		} else {
			console.log("Ignored Invalid Input Character : " + inputChar);
		}	
		return value;
	}


	//Derive Single Digit
	factoryCalc.deriveSingleDigit = function(digit) {
		var singleDigit = 0;
		//console.log("Derive Single Digit for : " + digit);
		var digitArray = digit.toString().split("");
		//console.log("Digit Array : " + digitArray);

		for (i = 0; i < digitArray.length; i++) { 
 		   singleDigit += parseInt(digitArray[i]);
 		   //console.log("Running Single Digit : " + singleDigit);
		}

		//TODO - Check if ther is possibility of double digit appearing again
		if(this.isMultiDigit(singleDigit)) {
			singleDigit = this.deriveSingleDigit(singleDigit);
		}

		return singleDigit;
	}

	//Check if  Multi Digit
	factoryCalc.isMultiDigit = function(digit) {
		var multiDigit = false;

		if(digit.toString().length > 1) {
			multiDigit = true;
		}

		return multiDigit;
	}


    return factoryCalc;
}); 
