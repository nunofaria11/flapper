'use strict';
var postsController = angular.module('postsController', []);

postsController.controller('PostsCtrl',  ['$scope', '$routeParams', 'posts', 
	function ($scope, $routeParams, posts) {
		var idx = parseInt($routeParams.postIdx,10);
		$scope.post = posts.posts[idx];
		$scope.incrementUpvotes = function(post){
			post.upvotes++;
		};
		$scope.addComment = function(){
			if($scope.body === undefined) {
				alert('Comment is empty!');
				return;
			}
			var author = $scope.author === undefined || $scope.author === '' ? 'Anonymous' : $scope.author;
			$scope.post.comments.push({
				author: author,
				body: $scope.body,
				upvotes: 0
			});
			$scope.body = '';
			$scope.author = '';
		};
}]);