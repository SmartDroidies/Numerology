'use strict';
/* App Module */
var numerologyApp = angular.module('numerologyApp', ['ngRoute', 'ngTouch', 'numerologyControllers', 'numerologyServices']);

numerologyApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
			when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl'
			}).
			when('/numerology', {
				templateUrl : 'partials/numerology.html',
				controller : 'NumerologyCtrl'
			}).
			when('/compatibility', {
				templateUrl : 'partials/compatibility.html',
				controller : 'CompatibilityCtrl'
			}).
			when('/calculator', {
				templateUrl : 'partials/calculator.html',
				controller : 'CalculatorCtrl'
			}).
			when('/checksheet', {
				templateUrl : 'partials/checksheet.html',
				controller : 'ChecksheetCtrl'
			}).
			when('/knowledge', {
				templateUrl : 'partials/knowledge.html',
				controller : 'KnowledgeCtrl'
			}).
			otherwise({
				redirectTo : '/numerology'
			});
		}
	]);
	
