var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope) {

		$scope.posts = [{
			title: 'Google',
			link: 'www.google.com',
			votes: 500
		}, {
			title: 'Facebook',
			link: 'www.facebook.com',
			votes: 450
		}, {
			title: 'CNN',
			link: 'www.cnn.com',
			votes: 200
		}];

		$scope.addPost = function() {
			if (!$scope.title || $scope.title === '') {
				alert('A title is needed!');
				return;
			}
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				votes: 0
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
	}
]);

app.factory('posts', [function() {

}])