(function() {
  'use strict';

	angular.module('appProfite')
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			})
			.otherwise({
				redirectTo: '/'
			});
		});
})();