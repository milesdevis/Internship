
var Model = angular.module('Module', ['ui.bootstrap']);

var testController = ['$scope', '$http',
  function ($scope, $http) {

      $scope.status = 'loading...';
      $scope.model = "Select Model";
      $scope.data = {
          "CarModels": {}
      };

      //load JSON data
      /*  $http.get('ModelTypes.json')
        *  .then(function (res) {
         *     $scope.data.CarModels.models = res.data;
          *    $scope.status = "loaded " + $scope.data.CarModels.models.length + " Models.";
           *   $scope.$apply();
          *});
          */

  }
];
Model.config(testController);
