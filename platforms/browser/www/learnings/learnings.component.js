'use strict';

// Register `learnings` component, along with its associated controller and template
angular.
  module('learnings').
  component('learnings', {
    templateUrl: 'learnings/learnings.template.html',
    controller: ['$log', '$scope', '$firebaseArray', 
      function LearningsController($log, $scope, $firebaseArray) {
		
		var self = this;

        //Load Learnings
        self.loadLearnings = function() {

          self.message = null;
          self.data = false;
          self.progress = true;

          var refLearnings = firebase.database().ref('data/learnings');
          $scope.learnings = $firebaseArray(refLearnings);
          $scope.learnings.$loaded(function() {
			  $log.debug("Learnings : " + JSON.stringify($scope.learnings));
            //self.data = true;
            //self.progress = false;
          }).catch(function(err) {
            $log.error("Failed to collect learnings from firebase : " + err);
            //window.Firebase.exception("Failed to collect learnings from firebase : " + err);
            //self.progress = false;
            //self.data = false;
            //self.message = 'error.firebase';
          });
        };

        //Load Learnings 
		self.loadLearnings();
      }
    ]
  });