'use strict';

angular.
  module('numerologyApp').
  config(['$locationProvider' ,'$routeProvider', 
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        when('/values', {
          template: '<char-values></char-values>'
        }).
        when('/qualities', {
          template: '<number-qualities></number-qualities>'
        }).
        when('/learnings', {
          template: '<learning></learning>'
        }).
        otherwise('/dashboard');
    }
  ])
  .constant('config', {
    appName: 'Numerology',
    gridmodel: [{'day': '0', 'soolam': 'Merku', 'pariga' : 'Vellam'},
      {'day': '1', 'soolam': 'Kizaku', 'pariga' : 'Thayir'},
      {'day': '2', 'soolam': 'Vadaku', 'pariga' : 'Paal'},
      {'day': '3', 'soolam': 'Vadaku', 'pariga' : 'Paal'},
      {'day': '4', 'soolam': 'Therku', 'pariga' : 'Thailam'},
      {'day': '5', 'soolam': 'Merku', 'pariga' : 'Thailam'},
      {'day': '6', 'soolam': 'Kizaku', 'pariga' : 'Thayir'}]
  })
  
  //Theme configure 
  .config(function($mdThemingProvider, $provide) {

    //Default Theme
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('grey')
      .backgroundPalette('grey', { 'default': '100' })      
    $mdThemingProvider.setDefaultTheme('default');

  })
  
  .run(function($rootScope, $log, $firebaseObject) {
	
	/*
      $rootScope.loadUserPref = function() {
        var ref = firebase.database().ref("user-pref");
        var profileRef = ref.child(device.uuid);
        var objProfile = $firebaseObject(profileRef);
        $rootScope.profile = objProfile;
        objProfile.$loaded().then(function(data) {
          if (typeof $rootScope.profile.theme === 'undefined') {
            $rootScope.userTheme = "default";
          } else {
            $rootScope.userTheme = $rootScope.profile.theme;  
          }
          //$log.debug("User Theme : " + $rootScope.userTheme);
        }).catch(function(error) {
            $log.error("Error:", error);
            window.Firebase.exception("Error in loading firebase user preference - " + error);
        });
      }

      //Loading User Profile
      $rootScope.loadUserPref();
	*/
  });


//ng-i18next - use i18next with Angularjs
angular.module('jm.i18next').config(['$i18nextProvider', function ($i18nextProvider) {
    $i18nextProvider.options = {
        lng: 'en',
        useCookie: false,
        useLocalStorage: false,
        fallbackLng: 'en',
        resGetPath: 'locales/__lng__/__ns__.json',
        defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
    };
}]);
