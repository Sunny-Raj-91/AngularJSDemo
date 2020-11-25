/// <reference path="../angular.min.js" />

var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {

    var technologies = [
        { name: 'C#', likes: 0, dislikes: 0 },
        { name: 'Python', likes: 0, dislikes: 0 },
        { name: 'React', likes: 0, dislikes: 0 },
        { name: 'Angular', likes: 0, dislikes: 0 },
    ]

    

    $scope.technologies = technologies;

    $scope.incrementLikes = function (tech) {
        tech.likes++;
    }
    $scope.incrementDislikes = function (tech) {
        tech.dislikes++;
    }

    var employees = [
        { name: 'C#', gender: 1, salary: 10000 },
        { name: 'Python', gender: 2, salary: 20000 },
        { name: 'React', gender: 3, salary: 300000 },
        { name: 'Angular', gender: 1, salary: 400000 },
    ]

    $scope.employees = employees;

    

})
    .controller("controller1", function ($scope) {
        $scope.message = "hi from ctrl1";
    })
    .controller("childController1", function ($scope) {
        $scope.message = "hi from cc1";

        $scope.emitevent = function () {
            var args = { value: $scope.message };

            $scope.$parent.$emit('eve', args);
        }

        
    })
    .controller("childController2", function ($scope) {
        $scope.$parent.$on('eve', function (e, args) {
            $scope.message = args.value;
            console.log(e);
        })
    })

.filter("gender", function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return 'Male';
            case 2:
                return 'Female';
            case 3:
                return 'Not Disclosed';
        }
    }
});