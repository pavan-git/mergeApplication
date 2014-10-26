define([
    'app/app',
],
        function (app) {
            'use strict';
            return app.config([
                '$stateProvider',
                '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {

                    $stateProvider
                            .state('app', {
                                url: '/app',
                                abstract : true,
                                templateUrl: 'partials/home/menu.html',
                                controller: 'login as vm'
                            })
                            .state('app.home', {
                                url: '/home',
                                views: {
                                   'menuContent' :{
                                      templateUrl: 'partials/home/home.html',
                                      controller: 'login as vm'
                                   }
                                 },
                            })
                            .state('app.profile', {
                                url: '/profile',
                                views: {
                                   'menuContent' :{
                                      templateUrl: 'partials/home/profile.html',
                                      controller: 'login as vm'
                                   }
                                 },
                            })
                            .state('login', {
                                url: '/login',
                                templateUrl: 'partials/login/loginForm.html',
                                controller: 'login as vm'
                            })
                            .state('signup', {
                                url: '/signup',
                                templateUrl: 'partials/login/signupForm.html',
                                controller: 'signup as vm'
                            });

                    // if none of the above states are matched, use this as the fallback
                    $urlRouterProvider.otherwise('/login');

                }
            ]);
        });