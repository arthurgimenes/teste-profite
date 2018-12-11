(function () {
    'use strict';

    angular
        .module('appProfite')
        .directive('ngFancybox', ngFancybox);

    function ngFancybox() {

        function link(scope, element, attrs) {			
			$(element).fancybox({
				margin: 50
			});
        }

        return {
            link: link
        };
    }

})();
