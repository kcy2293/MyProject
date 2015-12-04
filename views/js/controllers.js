var app = angular.module("MyApp", ["ngMaterial"]);
app.controller("MyCtrl", function($scope, $http, $mdSidenav) {
	$scope.toggleSidenav = function() {
		$mdSidenav("left").toggle();
	};

	$http.get('/phones').success(function(data) {
		$scope.phones = data;
		//$scope.phones = data.splice(0, 5); // for pagination.. maybe..
	});
	$scope.orderProp = "age";
});
