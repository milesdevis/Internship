
var Make = angular.module('Make', ['ui.bootstrap']);

var testController = ['$scope', '$http',
  function ($scope, $http) {

      $scope.status = 'loading...';
      $scope.make = "Select Make";
      $scope.data = {
          "makesD": {}
      };

      //load JSON data
      /*  $http.get('MakeTypes.json')
        *  .then(function (res) {
         *     $scope.data.makesD.makes = res.data;
          *    $scope.status = "loaded " + $scope.data.makesD.makes.length + " makes.";
           *   $scope.$apply();
          *});
          */

  }
];
Make.config(testController);
