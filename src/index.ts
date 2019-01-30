import * as angular from 'angular';
import * as ons from 'onsenui';

(<any>window).ons = ons;
(<any>window).angular = angular;

import 'onsenui/js/angular-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './main.html';

angular.module('app', [])
  .controller('PageController', function ($scope) {
    $scope.alert = function (message) {
      ons.notification.alert(message);
    };
  })  
  .run(function () {
    console.log('It worked!!!');
  });

angular.bootstrap(document, ['onsen', 'app']);
