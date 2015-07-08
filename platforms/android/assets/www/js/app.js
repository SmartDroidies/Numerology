'use strict';
/* App Module */
var numerologyApp = angular.module('numerologyApp', ['ngRoute', 'ngTouch', 'numerologyControllers']);

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
				controller : 'NumerologyCtrl'
			}).
			otherwise({
				redirectTo : '/numerology'
			});
		}
	]);
	
