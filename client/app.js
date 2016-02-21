var app = angular.module('air', ['ngRoute']);

app.config(function($routeProvider){
    console.log('im here');
    $routeProvider
    .when('/', {
        templateUrl: "/client/views/home.html",
        controller: "HomeController"
    })
    .when('/contacts', {
        templateUrl: "/client/views/contact.html",
        controller: "ContactsController"
    })
});
