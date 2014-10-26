define([
    'angular',
    'ionic',
    'angularAnimate',
    'angularUiRouter',
    'ionicAngular',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';
    var app = ng.module('app', ['ionic',
                                'ngAnimate',
                                'ui.router',
                                'app.services',
                                'app.controllers',
                                'app.filters',
                                'app.directives']).run(function(){
                                    //
                                });
    return app;                            
                            
});