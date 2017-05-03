'use strict';
/* App Module */
var numerologyApp = angular.module('numerologyApp', ['ngRoute', 'ngTouch', 'numerologyControllers', 'numerologyServices', 'underscore']);

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
			when('/tool/ws-name/:name', {
				templateUrl : 'partials/tools/ws-name.html',
				controller : 'ToolsCtrl'
			}).
			when('/tool/number/:name', {
				templateUrl : 'partials/tools/qualities.html',
				controller : 'ToolsCtrl'
			}).
			otherwise({
				redirectTo : '/home'
			});
		}
	]);
	
