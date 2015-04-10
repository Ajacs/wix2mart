'use strict';

angular.module('wix2martApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('milk', {
        url: '/milk',
        templateUrl: 'app/milk/milk.html',
        controller: 'MilkCtrl',
        resolve: {

        }
      });
  });