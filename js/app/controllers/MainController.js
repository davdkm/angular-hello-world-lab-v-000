function MainController($scope) {
  $scope.name = 'David';
  $scope.email = 'email@exmaple.com';
  $scope.phone = '555-555-1234'
}

angular
  .module('app')
  .controller('MainController', MainController);
