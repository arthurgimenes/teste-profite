(function(){
	"use strict";	
	
	angular
	.module('appProfite')
	.controller('homeController', homeController);
	
	homeController.$inject = ['produtosAPI', '$scope'];
	
	function homeController(produtosAPI, $scope){

		$scope.loading = true;
		
		init();
		
		function init(){
			getProdutos();
		}
		
		function getProdutos() {
			produtosAPI.listProdutos().success(function(data){
				$scope.produtos = data;
				$scope.load = true;
			});
		};

		$scope.ampliarFoto = function(){
			console.log("ampliar foto");
		}

	}
	
})()