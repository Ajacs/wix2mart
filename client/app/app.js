'use strict';

angular.module('wix2martApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'restangular'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    RestangularProvider.setBaseUrl('api/');
  });