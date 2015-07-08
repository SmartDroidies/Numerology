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
			otherwise({
				redirectTo : '/home'
			});
		}
	]);
	
