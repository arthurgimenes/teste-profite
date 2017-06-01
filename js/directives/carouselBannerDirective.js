(function () {
    'use strict';

    angular
        .module('appProfite')
        .directive('ngCarouselBanner', ngCarouselBanner);

    function ngCarouselBanner() {

        function link(scope, element, attrs) {			
			
			$(element).owlCarousel({
				items: 1,
				loop:true,
				nav:true,
				autoplay:true,
				navText: [
					"<img src='img/banners/seta_esquerda.png' />",
					"<img src='img/banners/seta_direita.png' />"
				]
			});
			
        }

        return {
            link: link
        };
    }

})();
