	var app = angular.module('app', []);
	
	app.controller("Productis", ["$scope",
	  	function($scope) {
	    	
	    	$scope.production = [

	    		{
			      "title": "Sandália Ferracini Ecologic",
			      "economy": 43.98,
			      
			      "price": 95.92,
			      "divider": {
			        "number": 4,
			        "value": 23.98
			      },
			      "image": "imagem/sapatos/calçado1.png",
			      "zoom": "imagem/sapatos/calçado1_zoom.png",
			      "hover": "imagem/sapatos/calçado1_hover.png"
			    },
			    {
			    	"title": "Chinelo Kildare",
			      	"economy": 19.98,
			     	 "oldprice": "De: R$ " +99.90,
			      "price": 72.92,
			      "divider": {
			        "number": 3,
			        "value": 26.64
			      },
			      "image": "imagem/sapatos/calçado2.png",
			      "zoom": "imagem/sapatos/calçado2_zoom.png",
			      "hover": "imagem/sapatos/calçado2_hover.png"
			    },
			    {
			      "title": "Tênis Ferracini Week",
			      "economy": 45.98,
			      "oldprice": "De: R$ " + 229.90,
			      "price": 183.92,
			      "divider": {
			        "number": 9,
			        "value": 20.43
			      },
			      "image": "imagem/sapatos/calçado3.png",
			      "zoom": "imagem/sapatos/calçado3_zoom.png",
			      "hover": "imagem/sapatos/calçado3_hover.png"
			    },
			    {
			      "title": "Tênis Democrata Ferracini",
			      "economy": 59.98,
			      "oldprice": "De: R$ " + 219.90,
			      "price": 159.92,
			      "divider": {
			        "number": 7,
			        "value": 22.84
			      },
			      "image": "imagem/sapatos/calçado4.png",
			      "zoom": "imagem/sapatos/calçado4_zoom.png",
			      "hover": "imagem/sapatos/calçado4_hover.png"
			    }
	   		
	   		];


	   		$scope.starRating1 = 0;
		    $scope.hoverRating1 = 0;

		    $scope.click1 = function (param) {
		        console.log('Click(' + param + ')');
		    };

		    $scope.mouseHover1 = function (param) {
		        console.log('mouseHover(' + param + ')');
		        $scope.hoverRating1 = param;
		    };

		    $scope.mouseLeave1 = function (param) {
		        console.log('mouseLeave(' + param + ')');
		        $scope.hoverRating1 = param + '*';
		    };

		    
	   		
	   		
		}



	]);

	app.directive('starRating', function () {
    	return {
        scope: {
            rating: '=',
            maxRating: '@',
            readOnly: '@',
            click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        restrict: 'EA',
        template:
            "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'> \
                    <img ng-src='{{((hoverValue + _rating) <= $index) && \"http://www.codeproject.com/script/ratings/images/star-empty-lg.png\" || \"http://www.codeproject.com/script/ratings/images/star-fill-lg.png\"}}' \
                    ng-Click='isolatedClick($index + 1)' \
                    ng-mouseenter='isolatedMouseHover($index + 1)' \
                    ng-mouseleave='isolatedMouseLeave($index + 1)'></img> \
            </div>",
        compile: function (element, attrs) {
            if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                attrs.maxRating = '5';
            };
        },
        controller: function ($scope, $element, $attrs) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRating; i++) {
                $scope.maxRatings.push({});
            };

            $scope._rating = $scope.rating;
			
			$scope.isolatedClick = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope.rating = $scope._rating = param;
				$scope.hoverValue = 0;
				$scope.click({
					param: param
				});
			};

			$scope.isolatedMouseHover = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope._rating = 0;
				$scope.hoverValue = param;
				$scope.mouseHover({
					param: param
				});
			};

			$scope.isolatedMouseLeave = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope._rating = $scope.rating;
				$scope.hoverValue = 0;
				$scope.mouseLeave({
					param: param
				});
			};
        }
   		};
	});


	app.controller("Banner", ["$scope",
	  	function($scope) {
	    	
	    	$scope.banner = [

	    		{
			      "image": "imagem/banner/banner1.jpg",
			      "mobile": "imagem/banner/banner1_mobile.jpg"
			    },
			    {
			    	"image": "imagem/banner/banner2.jpg",
			      "mobile": "imagem/banner/banner2_mobile.jpg"
			    },
			    {
			      "image": "imagem/banner/banner3.jpg",
			      "mobile": "imagem/banner/banner3_mobile.jpg"
			    },
			    {
			      "image": "imagem/banner/banner4.jpg",
			      "mobile": "imagem/banner/banner4_mobile.jpg"
			    },
			    {
			      "image": "imagem/banner/banner5.jpg",
			      "mobile": "imagem/banner/banner5_mobile.jpg"
			    }
	   		
	   		];

	   		
		}



	]);



