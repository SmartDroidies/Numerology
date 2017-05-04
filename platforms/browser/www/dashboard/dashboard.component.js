'use strict';

// Register `dashboard` component, along with its associated controller and template
angular.
  module('dashboard').
  component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: ['$log',
      function DashboardController($log) {
		  
        var self = this;

		self.initialize = function() {
				
		};

		self.initialize();
      }
    ]
  });