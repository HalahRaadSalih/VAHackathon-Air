var app = angular.module('air', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "templates/home.html",
        controller: "HomeController"
    }).when('/posts', {
        templateUrl: "templates/posts.html",
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
