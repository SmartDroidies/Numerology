'use strict';

// Register `charValues` component, along with its associated controller and template
angular.
  module('charValues').
  component('charValues', {
    templateUrl: 'char-values/char-values.template.html',
    controller: ['$log',
      function DashboardController($log) {
        var self = this;

		self.initialize = function() {
			
		};

		self.initialize();
      }
    ]
  });