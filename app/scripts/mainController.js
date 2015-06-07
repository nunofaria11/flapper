'use strict';
var mainController = angular.module('mainController', []);

mainController.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {

	$scope.posts = posts.posts;

	$scope.addPost = function() {
		if (!$scope.title || $scope.title === '') {
			alert('A title is needed!');
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			votes: 0,
			comments: [] // comments: author, body, upvotes
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.upVote = function(post) {
		post.votes++;
	};

	$scope.downVote = function(post) {
		if (post.votes > 0) {
			post.votes--;
		}
	};
}]);

// create posts service
mainController.factory('posts', [function() {
	var o = {
		posts: []
	};
	return o;
}])