var app = angular.module('air', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "/client/views/templates/home.html",
        controller: "HomeController"
    })
    .when('/posts', {
        templateUrl: "./views/templates/posts.html",
        controller: "PostsController"
    }).when('/contact', {
        templateUrl: "templates/contact.html",
        controller: "ContactController"
    }).when('/about', {
        templateUrl: "templates/about.html",
        controller: "AboutController"
    }).otherwise({
        redirectTo: "/"
    })
});
