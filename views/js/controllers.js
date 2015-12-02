var app = angular.module("MyApp", ["ngMaterial"]);

app.controller("MyCtrl", function($scope, $mdSidenav) {
	$scope.toggleMenu = function() {
		$mdSidenav('left').toggle();
	};

	$scope.phones = [
		{"name" : "Nexus S", "description" : "Fast just got faster with Nexus S."},
		{"name" : "Motorola XOOM™ with Wi-Fi", "description" : "The Next, Next Generation tablet."},
		{'name': 'MOTOROLA XOOM™', 'description': 'The Next, Next Generation tablet.'}
	];

});
