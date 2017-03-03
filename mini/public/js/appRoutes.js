// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the StudentController
        .when('/nerds', {
            templateUrl: 'views/student.html',
            controller: 'StudentController'
        });

    $locationProvider.html5Mode(true);

}]);
