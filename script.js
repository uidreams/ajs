var app = angular.module('beverageApp', []);

app.controller('beverageAppHeader', function($scope) {
    $scope.appName = "Beverage Order App";
})

app.controller('beverageOrderFormCtrl', function($scope, $http) {
    $scope.orderForm = {};
    $scope.queue = [];
    $scope.processing = [];
    $scope.ready = [];

    $scope.beverages =
    [
      {
        "BeverageId": "04d8e4eb-306e-4ff3-a027-7bed4da883f8",
        "Name": "Sparkling Cranberry Punch"
      },
      {
        "BeverageId": "0ae5a67d-d055-4fef-9a0a-889001dcb241",
        "Name": "Raspberry Fizz"
      },
      {
        "BeverageId": "1d10b218-f4da-4ae3-a383-de1657dbaa6a",
        "Name": "Virgin Frozen Margarita"
      },
      {
        "BeverageId": "241ae7d5-4ccb-4b74-8783-bbe2c55f162f",
        "Name": "Iced Chocolate Delight"
      },
      {
        "BeverageId": "2630c442-84a7-4e44-829f-38e15f7fcbbb",
        "Name": "Summer Punch"
      }
    ];
    $scope.submitOrder = function(username, selectedBeverage) {
        $scope.queue.push($scope.orderForm);
        $scope.orderForm= {};
    }

    $scope.validQueue = function() {
        
    }

    // $http.get('http://myjson.com/15ha9v')
    //     .success(function (data) {
    //         alert(data);
    //         $scope.response = data;
    //     }) 
    //     .error(function error(err) {
    //         $scope.response = err;
    // })
});