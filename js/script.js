angular.module('AngularJSLogin', [])
.controller('AngularSessionController', ['$scope', '$http', function($scope, $http) {

	$scope.loginForm = function() {

		var user_data='user_email=' +$scope.inputData.email+'&user_password='+$scope.inputData.password;

		$http({
			method: 'POST',
			url: 'login.php',
			data: user_data,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.success(function(data) {
    		console.log(data);
			if ( data.trim() === 'correct') {
				window.location.href = 'welcome_dashboard.php';
			} else {
				$scope.errorMsg = "Invalid Email and Password";
			}
		})
	}

	$scope.signUpForm = function() {

		var user_data='user_email=' +$scope.inputData.email+'&user_password='+$scope.inputData.password+'&user_fname=' +$scope.inputData.fname+'&user_lname='+$scope.inputData.lname;

		$http({
			method: 'POST',
			url: 'sign-up.php',
			data: user_data,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.success(function(data) {
    		console.log(data);
			if ( data.trim() === 'correct') {
				window.location.href = 'index.php';
			} else {
				$scope.errorMsg = "Something went wrong. Please try again.";
			}
		})
	}

}]);