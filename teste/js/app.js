	var app = angular.module('app', []);
	
	app.controller("Bestsellers", ["$scope",
	  	function($scope) {
	    	
	    	$scope.bestsellers = [

	    		{
			      "title": "Chuteira Nike HyperVenomX Proximo II",
			      "price": 499.90,
			      "installments": {
			        "number": 10,
			        "value": 49.90
			      },
			      "high-top": true,
			      "category": "society",
			      "image": "http://bit.ly/2kD5Iqy"
			    },
			    {
			      "title": "Chuteira Nike HyperVenom Phantom III",
			      "price": 899.90,
			      "installments": {
			        "number": 10,
			        "value": 89.90
			      },
			      "high-top": true,
			      "category": "campo",
			      "image": "http://bit.ly/2kLvewA"
			    },
			    {
			      "title": "Chuteira Nike HyperVenom Phantom III",
			      "price": 699.90,
			      "installments": {
			        "number": 10,
			        "value": 69.90
			      },
			      "high-top": false,
			      "category": "campo",
			      "image": "http://bit.ly/2kk0fcj"
			    },
			    {
			      "title": "Chuteira Nike HyperVenomX Finale II",
			      "price": 399.90,
			      "installments": {
			        "number": 10,
			        "value": 39.90
			      },
			      "high-top": false,
			      "category": "society",
			      "image": "http://bit.ly/2kp8ajy"
			    },
			    {
			      "title": "Chuteira Nike HyperVenomX Proximo II",
			      "price": 499.90,
			      "installments": {
			        "number": 10,
			        "value": 49.90
			      },
			      "high-top": true,
			      "category": "society",
			      "image": "http://bit.ly/2kD5Iqy"
			    },
			    {
			      "title": "Chuteira Nike HyperVenom Phantom III",
			      "price": 899.90,
			      "installments": {
			        "number": 10,
			        "value": 89.90
			      },
			      "high-top": true,
			      "category": "campo",
			      "image": "http://bit.ly/2kLvewA"
			    },
			    {
			      "title": "Chuteira Nike HyperVenom Phantom III",
			      "price": 699.90,
			      "installments": {
			        "number": 10,
			        "value": 69.90
			      },
			      "high-top": false,
			      "category": "campo",
			      "image": "http://bit.ly/2kk0fcj"
			    },
			    {
			      "title": "Chuteira Nike HyperVenomX Finale II",
			      "price": 399.90,
			      "installments": {
			        "number": 10,
			        "value": 39.90
			      },
			      "high-top": false,
			      "category": "society",
			      "image": "http://bit.ly/2kp8ajy"
			    }
	   		
	   		];

	   		
	 	}
	]);


	app.controller("Release", ["$scope",
	  	function($scope) {
	    	
	   		$scope.releases = [

	   			{
			      "title": "Chuteira Nike Hypervenom Phade II",
			      "price": 299.90,
			      "installments": {
			        "number": 10,
			        "value": 29.90
			      },
			      "high-top": false,
			      "category": "society",
			      "image": "http://bit.ly/2lckxDQ"
			    },
			    {
			      "title": "Chuteira Nike Hypervenom Phatal II Dinamic-Fit",
			      "price": 899.90,
			      "installments": {
			        "number": 10,
			        "value": 89.90
			      },
			      "high-top": true,
			      "category": "campo",
			      "image": "http://bit.ly/2l0zu9O"
			    },
			    {
			      "title": "Chuteira Nike Hypervenom Phinish SG-PRO AC",
			      "price": 799.90,
			      "installments": {
			        "number": 10,
			        "value": 79.90
			      },
			      "high-top": false,
			      "category": "campo",
			      "image": "http://bit.ly/2l0CHGi"
			    },
			    {
			      "title": "Chuteira Hypervenom Phinish SE",
			      "price": 599.90,
			      "installments": {
			        "number": 10,
			        "value": 59.90
			      },
			      "high-top": false,
			      "category": "campo",
			      "image": "http://bit.ly/2kLKTMj"
			    },
			    {
			      "title": "Chuteira Nike Hypervenom Phade II",
			      "price": 299.90,
			      "installments": {
			        "number": 10,
			        "value": 29.90
			      },
			      "high-top": false,
			      "category": "society",
			      "image": "http://bit.ly/2lckxDQ"
			    },
			    {
			      "title": "Chuteira Nike Hypervenom Phatal II Dinamic-Fit",
			      "price": 899.90,
			      "installments": {
			        "number": 10,
			        "value": 89.90
			      },
			      "high-top": true,
			      "category": "campo",
			      "image": "http://bit.ly/2l0zu9O"
			    },
			    {
			      "title": "Chuteira Nike Hypervenom Phinish SG-PRO AC",
			      "price": 799.90,
			      "installments": {
			        "number": 10,
			        "value": 79.90
			      },
			      "high-top": false,
			      "category": "campo",
			      "image": "http://bit.ly/2l0CHGi"
			    },
			    {
			      "title": "Chuteira Hypervenom Phinish SE",
			      "price": 599.90,
			      "installments": {
			        "number": 10,
			        "value": 59.90
			      },
			      "high-top": false,
			      "category": "campo",
			      "image": "http://bit.ly/2kLKTMj"
			    }


	   		];
	 	}
	]);
