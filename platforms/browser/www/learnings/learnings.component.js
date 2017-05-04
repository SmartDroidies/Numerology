'use strict';

// Register `learnings` component, along with its associated controller and template
angular.
  module('learnings').
  component('learnings', {
    templateUrl: 'learnings/learnings.template.html',
    controller: ['$log',
      function LearningsController($log) {
        var self = this;

		self.initialize = function() {
			
		};

		self.initialize();
      }
    ]
  });