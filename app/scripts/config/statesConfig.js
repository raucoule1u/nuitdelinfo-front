'use strict';

angular.module('lanuitdelinfoFrontApp')
    .config(['$stateProvider', 'States', '$urlRouterProvider',
    function ($stateProvider, States, $urlRouterProvider) {

        // LOGIN
        var loginState = {
            url: '/login',
            templateUrl: 'views/partials/login.html',
            controller: 'LoginCtrl as loginCtrl'
        };
        // SIGNUP
        var signupState = {
            url: '/signup',
            templateUrl: 'views/partials/signup.html',
            controller: 'signupCtrl as signupCtrl'
        };
        // ERROR 404 NOT FOUND
        var notFoundState = {
            url: '/notfound',
            templateUrl: 'views/partials/notfound.html'
        };

        // Configure the route of the application
        var baseState = {
            abstract: true,
            url: '',
            templateUrl: 'views/main.html'
        };

        // HOME
        var homeState = {
            url: '/home',
            templateUrl: 'views/partials/home.html',
            controller: 'HomeCtrl as homeCtrl',
            parent: baseState
        };

        var groupState = {
            url: '/group',
            templateUrl: 'views/partials/group.html',
            controller: 'GroupCtrl as groupCtrl',
            parent: baseState
        };

        $stateProvider
            .state(States.BASE, baseState)
            .state(States.NOT_FOUND, notFoundState)
            .state(States.LOGIN, loginState)
            .state(States.HOME, homeState)
            .state(States.GROUP, groupState)
            .state(States.SIGNUP, signupState);


        $urlRouterProvider.when('/', homeState.url);
        $urlRouterProvider.when('', homeState.url);
        $urlRouterProvider.otherwise(notFoundState.url);
    }
]);
