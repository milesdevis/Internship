var Internship = angular.module('Internship', ['ngRoute']);

Internship.controller('LandingPageController', LandingPageController);
Internship.controller('LoginController', LoginController);
Internship.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);



var configFunction = function ($routeProvider,$httpProvider) {
    $routeProvider.
        when('/AboutUs', {
            templateUrl: 'Demo/AboutUs'
        })
        .when('/HowItWorks', {
            templateUrl: 'Demo/HowItWorks'
        })
         .when('/LearnMore', {
             templateUrl: 'Demo/LearnMore',
         })
         .when('/MoreTestimonials', {
             templateUrl: 'Demo/MoreTestimonials',
         })
         .when('/Press', {
             templateUrl: 'Demo/Press',
         })
        .when('/ContactUs', {
            templateUrl: 'Demo/ContactUs',
        })
        .when('/Jobs', {
            templateUrl: 'Demo/Jobs',
        })
        .when('/Blog', {
            templateUrl: 'Demo/Blog',
        })
        .when('/Login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/Buy', {
            templateUrl: '/Account/Buy',
        })
        .when('/SellYourCar', {
        templateUrl: '/Account/SellYourCar',
        controller: LoginController
    });
   
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

Internship.config(configFunction);