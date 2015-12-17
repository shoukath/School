'use strict'

/* global angular */

var loginApp = angular.module('loginApp', []);

/*Login Application*/
loginApp.controller('loginCtrl', function($scope, $http) {
	$scope.name = 'shoukathkhan';
	$scope.password = 'test';
	$scope.submit = function() {
		console.log('Submit');

		$http({
			url: '/login',
			method: 'POST',
			data: {
				username: $scope.name,
				password: $scope.password
			}
		}).success(function(data, status, headers, config) {
			$scope.users = data;
			console.log(data);
		}).error(function(data, status, headers, config) {
			$scope.status = status;
		});
	};
});
