'use strict';

// Register `header` component, along with its associated controller and template
angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.template.html',
    controller: ['$mdSidenav', '$log', '$i18next', '$mdDialog', '$location',
      function HeaderController($mdSidenav, $log, $i18next, $mdDialog, $location) {

        var self = this;

        self.toggleMenu = function (screen) {
        	$mdSidenav('main-menu').toggle();
        };

        self.goto = function(screen) {
          $mdSidenav('main-menu').close()
            .then(function() {
              //$log.debug('Take User to : ' + screen);
              $location.path(screen);  
            });
        };

        self.share = function () {
          var platform = device.platform;
          if(platform == "iOS") {
            window.plugins.socialsharing.share('Try this great Tamil App - ', 'Tamil Calendar',null,'https://itunes.apple.com/app/id1072440433');
          } else {
            var text = $i18next("message.share");
            window.plugins.socialsharing.share(text, 'Tamil Calendar',null,'https://play.google.com/store/apps/details?id=com.smart.droidies.tamil.natkati');
          } 
          window.Firebase.event("app_share", "");
        };

        self.rate = function () {
          var platform = device.platform;
          //$log.debug("Platform : " + platform);
          if(platform == "iOS") {
            var url = "itms-apps://itunes.apple.com/app/id1072440433";
            window.open(url);   
          } else {
            var url = "market://details?id=com.smart.droidies.tamil.natkati";
            window.open(url,"_system");   
          } 
          window.Firebase.event("app_rate", "");
        };

        self.feedback = function (ev) {

          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
            .title($i18next("title.request"))
            .textContent($i18next("message.attach"))
            .targetEvent(ev)
            .ok($i18next("button.attach"))
            .cancel($i18next("button.no"));

          $mdDialog.show(confirm).then(function() {
             //$log.debug("Send Mail by attaching the screeshot");
            navigator.screenshot.save(function(error,res) {
              if(error) {
                $log.error(error);
                self.mail(false);
              } else  {
                //$log.debug('File name :' + res.filePath);
                self.mail(res.filePath);
              }
            },'jpg',50,'natkati');
          }, function() {
             //$log.debug("Send Mail by Not attaching the screeshot"); 
             self.mail(false);
          });

        };

        self.mail = function(filepath) {

            var devicePlatform = device.platform;
            var model = device.model;
            var bodyTemp = "Platform : " + devicePlatform + "<br>" + "Model : " + model + "<br>";

            var fileName = 'file://' + filepath;
            cordova.plugins.email.open({
              app: 'gmail',
              to:      ['smartdroidies@gmail.com'],
              subject: 'Feedback on Tamil Calendar - ' + appversion,
              attachments: fileName,
              body:  bodyTemp
            }, function () {
              //$log.debug('email view dismissed');
            }, this);
            window.Firebase.event("app_feedback", "");
        } 

      }
    ]
  });