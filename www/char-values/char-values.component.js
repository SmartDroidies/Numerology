'use strict';

// Register `charValues` component, along with its associated controller and template
angular.
  module('charValues').
  component('charValues', {
    templateUrl: 'char-values/char-values.template.html',
    controller: ['$log',
      function CharValuesController($log) {
        var self = this;
		var char_vals = [[{"label":"1", "head" : true},{"label":"A"},{"label":"J"},{"label":"S"}],
			[{"label":"2", "head" : true},{"label":"B"},{"label":"K"},{"label":"T"}],
			[{"label":"3", "head" : true},{"label":"C"},{"label":"L"},{"label":"U"}],
			[{"label":"4", "head" : true},{"label":"D"},{"label":"M"},{"label":"V"}],
			[{"label":"5", "head" : true},{"label":"E"},{"label":"N"},{"label":"W"}],
			[{"label":"6", "head" : true},{"label":"F"},{"label":"O"},{"label":"X"}],
			[{"label":"7", "head" : true},{"label":"G"},{"label":"P"},{"label":"Y"}],
			[{"label":"8", "head" : true},{"label":"H"},{"label":"Q"},{"label":"Z"}],
			[{"label":"9", "head" : true},{"label":"I"},{"label":"R"},{"label":""}]]; 

		self.initialize = function() {
			self.values = char_vals;
		};

		self.initialize();
      }
    ]
  });