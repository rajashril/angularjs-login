angular.module('AngularJSLogin', [])
.controller('AngularSessionController', ['$scope', '$http', function($scope, $http) {

	this.loginForm = function() {

		var user_data='user_email=' +this.inputData.email+'&user_password='+this.inputData.password;

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

	this.signUpForm = function() {

		var user_data='user_email=' +this.inputData.email+'&user_password='+this.inputData.password+'&user_fname=' +this.inputData.fname+'&user_lname='+this.inputData.lname;

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