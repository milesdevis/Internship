
var Location = angular.module('Location', ['ui.bootstrap']);

var testController = ['$scope', '$http',
  function ($scope, $http) {

      $scope.status = 'loading...';
      $scope.location = "Select Location";
      $scope.data = {
          "cities": {}
      };

      //load JSON data
    /*  $http.get('locations.json')
      *  .then(function (res) {
       *     $scope.data.cities.locations = res.data;
        *    $scope.status = "loaded " + $scope.data.cities.locations.length + " locations.";
         *   $scope.$apply();
        *});
        */

  }
];
Location.config(testController);
