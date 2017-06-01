(function () {
    'use strict';

    angular
        .module('appProfite')
        .directive('ngCarouselProd', ngCarouselProd);

    function ngCarouselProd() {

        function link(scope, element, attrs) {			
			
			attrs.$observe('load', function () {
                if (attrs.load == 'true') {
                    initCarousel();
                }
            })
			
			function initCarousel() {
				setTimeout(function () {
					$(element).owlCarousel({
						loop:true,
						nav: true,
						navText: [
							"<img src='img/prod/seta_esquerda.png' />",
							"<img src='img/prod/seta_direita.png' />"
						],
						dots: false,
						responsiveClass: true,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:3
							},
							967:{
								items:4
							}
						}
					});
				},100)
			}
			
        }

        return {
            link: link
        };
    }

})();
