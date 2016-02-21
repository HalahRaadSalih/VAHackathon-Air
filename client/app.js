var app = angular.module('air', ['ngRoute']);

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
        controller: "DashboardClient"
    })
});
