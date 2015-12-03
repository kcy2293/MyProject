var app = angular.module("MyApp", ["ngMaterial"]);
app.controller("MyCtrl", function($scope, $mdSidenav) {
	$scope.toggleSidenav = function() {
		$mdSidenav("left").toggle();
	};
	$scope.orderProp = "age";
	$scope.phones = [{
		"name" : "Nexus S",
		"desc" : "Fast just got faster with Nexus S.",
		"age": 2
	},{
		"name" : "Motorola XOOM™ with Wi-Fi",
		"desc" : "The Next, Next Generation tablet.",
		"age": 1
	},{
		"name" : "MOTOROLA XOOM™",
		"desc" : "The Next, Next Generation tablet.",
		"age": 3
	}];
});
