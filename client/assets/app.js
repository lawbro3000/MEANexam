var app = angular.module('app', ["ngRoute"]);

//define routes
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'newController',
      templateUrl: "/partials/home.html"
    })
    .when('/new', {
      controller: 'newController',
      templateUrl: "/partials/new.html"
    })
    .when('/edit/:id', {
      controller: 'editController',
      templateUrl: "/partials/edit.html"
    })
    .when('/show/:id', {
      
      controller: 'showController',
      templateUrl: "/partials/show.html"
    })
    .when('/delete/:id', {
    showController: 'showController',
    templateUrl: "/partials/show.html"
    })
    .otherwise('/',{
    })
});
