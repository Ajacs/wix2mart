'use strict';

angular.module('wix2martApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'Productos',
      'state': 'products'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });