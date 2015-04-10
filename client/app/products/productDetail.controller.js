'use strict';

angular.module('wix2martApp')
  .controller('ProductDetailController', function ($scope, product_detail) {
  	$scope.product = product_detail;
    $scope.message = 'Hello';
  });
