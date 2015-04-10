'use strict';

angular.module('wix2martApp')
  .controller('ProductDetailController', function ($scope, product_detail) {
  	console.log('detail controller');
  	console.log(product_detail);
  	$scope.productDetail = product_detail;
    $scope.message = 'Hello';
  });
