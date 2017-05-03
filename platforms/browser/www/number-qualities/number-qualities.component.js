'use strict';

// Register `numberQualities` component, along with its associated controller and template
angular.
  module('numberQualities').
  component('numberQualities', {
    templateUrl: 'number-qualities/number-qualities.template.html',
    controller: ['$log',
      function QualitiesController($log) {
        var self = this;

		self.initialize = function() {
			
		};

		self.initialize();
      }
    ]
  });