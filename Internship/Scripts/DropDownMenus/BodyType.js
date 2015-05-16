
var BodyType = angular.module('BodyType', ['ui.bootstrap']);

var testController = ['$scope', '$http',
  function ($scope, $http) {

      $scope.status = 'loading...';
      $scope.bodyType = "Select BodyType";
      $scope.data = {
          "Types": {}
      };

      //load JSON data
      /*  $http.get('BodyTypes.json')
        *  .then(function (res) {
         *     $scope.data.Types.bodyTypes = res.data;
          *    $scope.status = "loaded " + $scope.data.Types.bodyTypes.length + " BodyTypes.";
           *   $scope.$apply();
          *});
          */

  }
];
BodyType.config(testController);
