    define([
        "angular",
        "app/app",
        "app/namespace",
        "app/config"
        ],
        function (angular, app, appNS, appConfig) {
            "use strict";
            return app.config(["$stateProvider", "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    $stateProvider.state("app", {
                        url: "/app",
                        abstract: true,
                        templateUrl: appConfig.templatesDir + "home/menu.html",
                        controller: appNS + ".home.homeCtrl as vm",
                    }).state("app.home", {
                        url: "/home",
                        views: {
                            'menuContent': {
                                templateUrl: appConfig.templatesDir + "home/home.html",
                                controller: appNS + ".home.homeCtrl as vm"
                            }
                        }
                    }).state("login", {
                        url: "/login",
                        templateUrl: appConfig.templatesDir + "login/loginForm.html",
                        controller: appNS + ".login.loginCtrl as vm",
                    }).state("signup", {
                        url: "/signup",
                        templateUrl: appConfig.templatesDir + "signup/signupForm.html",
                        controller: appNS + ".login.loginCtrl as vm",
                    });

                    $urlRouterProvider.otherwise('/login');

          }]);

        });