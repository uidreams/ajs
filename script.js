var app = angular.module('beverageApp', ['ngRoute']);

app.run(function ($rootScope) {
  $rootScope.appName = "Beverage Order App";
  $rootScope.queue = [];
});

app.controller('beverageCtrl', function ($scope, $http, $rootScope) {
  $scope.orderForm = {};

  $http.get('https://api.myjson.com/bins/wreyv')
    .then(function (response) {
      $scope.beverageData = response.data;
    }, function () {
      alert('beverage data not loadded');
    });

  $scope.submitOrder = function (username, selectedBeverage) {
    $rootScope.queue.push($scope.orderForm);
    console.log($rootScope.queue);
    $scope.orderForm = {};
  }
});

app.controller('queueCtrl', function ($scope, $rootScope) {

  $scope.processing = [];
  $scope.ready = [];

  console.log($rootScope.queue);

  $scope.updateQueueStatus = function (index, item) {
    $rootScope.queue.splice(index, 1);
    $scope.processing.push(item);
  }
  $scope.updateProcessingStatus = function (index, item) {
    $scope.processing.splice(index, 1);
    $scope.ready.push(item);
  }
  $scope.updateReadyStatus = function (index, item) {
    $scope.ready.splice(index, 1);
  }
})
app.config(function ($routeProvider) {

  $routeProvider
    .when('/admin', {
      templateUrl: 'admin.html',
      controller: 'beverageCtrl'
    }).when('/client', {
      templateUrl: 'client.html',
      controller: 'beverageCtrl'
    }).otherwise({
      redirectTo: "/admin"
    })
});
