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
			var productsList = Restangular.all('products').getList().$object;
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
}).state('products.detail', {
	url: '/detail/:product_id',
	templateUrl: 'app/products/product_detail.html',
	resolve: {
		product_detail: function(products, $stateParams){
			console.log('products padre');
			for(var i=0;i<=products.length;i++){
				if(products[i].id == $stateParams.product_id){
					return products[i];
				}
				
			}
		}
	},
	controller: 'ProductDetailController'
});


});