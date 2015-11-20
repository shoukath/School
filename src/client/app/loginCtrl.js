var loginApp = angular.module("loginApp", []);

/*Login Application*/
loginApp.controller("loginCtrl", function($scope, $http) {
	// $scope.name = 'shoukath@gmail.com';
	// $scope.password = 'test';
	$scope.submit = function() {
		console.log('Submit');
		$http.get('/user').success(function(response) {
			console.log('working');
		})
	};
});

