'use strict';

angular.module('wix2martApp')
.config(function ($stateProvider) {
	$stateProvider
	.state('products', {
		url: '/products',
		templateUrl: 'app/products/products.html',
		resolve: {
			products: function(Restangular){
			// First way of creating a Restangular object. Just saying the base URL
			var productsList = Restangular.all('products').getList();
			return productsList;	
			// This will query /accounts and return a promise.
			/*productsList.getList().then(function(products) {
				console.log('products');
				console.log(products);
				return products;
			});*/
		}
	},
	controller: 'ProductsCtrl'
}).state('view', {
	url: '/products/:product_id',
	templateUrl: 'app/products/product_detail.html',
	resolve: {
		product_detail: function(Restangular, $stateParams){
			var product_detail = Restangular.one('products', $stateParams.product_id).get();
			console.log(product_detail);
			return product_detail;
		}
	},
	controller: 'ProductDetailController'
});
});