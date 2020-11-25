
/// <reference path="../angular.min.js" />
/// <reference path="App.js" />
myApp.controller('sumController', ['$scope', 'calcSum', 'calcSumService', function ($scope, calcSum, calcSumService) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.sum = '';
    $scope.getSumfac = function () {
        $scope.sum = calcSum.getSum($scope.a, $scope.b);

    }
    $scope.getSumSer = function () {
        $scope.sum = calcSumService.getSum($scope.a, $scope.b);
    }
}]);

myApp.factory('calcSum', [ '$log', function ($log) {
    $log.log('calSum instansiated...');
    var calSumFac = {};
    calSumFac.getSum = function (a,b) {
        return parseInt(a) + parseInt(b);
    }
    return calSumFac;
}]);

myApp.service('calcSumService', [function () {
    this.getSum = function (a, b) {
        return parseInt(a) + parseInt(b);
    }
}]);