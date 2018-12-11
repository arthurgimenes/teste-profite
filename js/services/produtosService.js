(function(){
	"use strict";
	
	angular
	.module('appProfite')
	.factory('produtosAPI', produtosAPI);
	
	produtosAPI.$inject = ['$http'];
	
	function produtosAPI($http){
		
		var service = {
			listProdutos: _listProdutos
		};
		
		return service;
		
		function _listProdutos() {
			return $http.get('../json/produtos.json')
			.success(function(data){
				return data;
			})
			.error(function (error) {
				console.log(error);
            });
		}

	}
	
})()