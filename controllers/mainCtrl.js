app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService){

	$scope.heroes = [];

	$scope.getDemHeroes = function() {
		$scope.heroes = dataService.heroSender();
		
	};

	$scope.getDemHeroes();

}]);


