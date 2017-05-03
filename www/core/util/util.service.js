'use strict';

angular.
  module('core.util').
  factory('Util', ['$log', 'config', 
    function($log, config) {
      
      var blogurl = "http://smartdroidies.com/calendar/?json=y";

      return {

        //Collect details of a Tamiz Day passed in input
        toStoreDate: function(actDate) {
          return moment(actDate).format("YYYY-MM-DD");
        },
        toStoreDateFromTS: function (pTimestamp) {
          return moment(pTimestamp, "X").format("YYYY-MM-DD");
        },
        toStoreMonth: function (actMonth) {
          return moment(actMonth).format("YYYY-MM");
        },
        getTime: function(hour, minute) {
          var time = hour + ":";
          if (minute.toString().length == 2) {
            time =  time + "" +  minute;
          } else {
            time = time + "0" + minute;
          }
          return time;
        }, 
        getKnowledgeType: function(typeCode) {
          //$log.debug("Get knowledge Type for : " + typeCode);
          var types = config.knwldgtypes;
          var type = _.find(types, function(item) { return item.code == typeCode; });
          if(!type) {
            type = types[0];
            //$log.debug("Return default type");
          }
          return type;
        },
        getListArticleUrl: function(category) {
          var urimaker = blogurl;
          urimaker = urimaker + "&ct=" + category;
          if(isTestDevice()) {
            urimaker = urimaker + "&td=y";  
          }
          var uri = encodeURI(urimaker);
          return uri;
        },
        getArticleUrl: function(articleid) {
          var urimaker = blogurl;
          urimaker = urimaker + "&id=" + articleid;
          if(isTestDevice()) {
            urimaker = urimaker + "&td=y";  
          }
          var uri = encodeURI(urimaker);
          return uri;
        },
        getArticleListCackeKey: function(category) {
          return C_PREFIX_CACHE + category;
        },
        getArticleCackeKey: function(articleid) {
          return C_PREFIX_CACHE + 'entry_' + articleid;
        },
        isAndroidDevice: function() {
          var isAndroid = false;
          if(platform == platformAndroid) {
            isAndroid = true;
          }
          return isAndroid;
        },
        isIOSDevice: function() {
          var isios = false;
          if(platform == platformios) {
            isios = true;
          }
          return isios;
        }   

      } 
    }
  ]);
