/*global angular,alert*/
var app = angular.module('flapperNews', ['ngRoute', 'mainController','postsController']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'MainCtrl'
			})
			.when('/posts/:postIdx', {
				templateUrl: 'templates/post.html',
				controller: 'PostsCtrl'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}
]);