'use strict';

angular.module('wix2martApp')
  .controller('ProductsCtrl', function ($scope, products) {
    $scope.message = 'Hello';
    $scope.productsList = products;
  });
