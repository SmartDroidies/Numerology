'use strict';

// Register `home` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$log', '$location', '$window', '$mdDialog',
      function HomeController($log, $location, $window, $mdDialog) {
        var self = this;

		self.onExit = function() {
			if ( $('.ui-page-active').attr('id') == 'main') {
				self.exitAppPopup();	
			} else {
				$window.history.back();
			}
		};

        self.authenticate = function() {
          firebase.auth().signInAnonymously().catch(function(error) {
            window.Firebase.exception(error.message);
            self.progress = false;
            self.message = 'error.firebase';
            $log.error(error.message);
          });

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              //$log.debug("Anonymous User : " + uid);
            } else {
              // User is signed out. Display Exception Message to user
            }
          });
        };     

		self.exitAppPopup = function() {

			$mdDialog.show({
      			controller: ExitDialogController,
      			templateUrl: 'home/exitdlg.template.html',
      			parent: angular.element(document.body),
			    clickOutsideToClose:true
    		})
			.then(function(response) {
				if(response == 'RATE') {

					window.Firebase.event("exit_rate", "");
			        var platform = device.platform;
			        //$log.debug("Platform : " + platform);
			        if(platform == "iOS") {
			        	var url = "itms-apps://itunes.apple.com/app/id1072440433";
			        	window.open(url);   
			        } else {
			        	var url = "market://details?id=com.smart.droidies.tamil.natkati";
			        	window.open(url,"_system");   
			        } 
			        
				}
				//$log.debug('You said the information was "' + response + '".');
    		}, function() {
    			//$log.debug('You cancelled the dialog.');
    		});
		};

		function ExitDialogController($scope, $mdDialog) {
			$scope.rate = function() {
			  	$mdDialog.hide("RATE");
		    };

		    $scope.cancel = function() {
		      	$mdDialog.cancel();
		    };

		    $scope.exit = function(answer) {
		    	navigator.app.exitApp();
		      //$mdDialog.hide("EXIT");
		    };
		};
	
		/*
  		if(!$rootScope.visited) {
  			$rootScope.visited = true;
  			document.addEventListener("backbutton", self.onExit, false);
			self.authenticate(); 
  		} else {
  			showInterstitial();
  			self.dashboard = true;
  		}
		*/

      }
    ]
  });