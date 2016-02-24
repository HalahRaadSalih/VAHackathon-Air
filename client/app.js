var app = angular.module('air', ['ngRoute','ngAnimate','angularMoment']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "/client/views/home.html",
        controller: "HomeController"
    })
    .when('/contacts', {
        templateUrl: "/client/views/contact.html",
        controller: "ContactsController"
    })
    .when('/dashboard', {
        templateUrl: "/client/views/dashboard.html",
    })
    .when('/dashboardFull', {
        templateUrl: "/client/views/dashboardFull.html",
        controller: "DashboardFull"
    })
});
