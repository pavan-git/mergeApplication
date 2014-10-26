/*global requirejs, document, cordova, window, navigator, console */

require.config({
    waitSeconds : 20,
    paths: {
        angular: 'lib/ionic/angular/angular',
        angularAnimate: 'lib/ionic/angular/angular-animate',
        angularSanitize: 'lib/ionic/angular/angular-sanitize',
        angularUiRouter: 'lib/ionic/angular-ui/angular-ui-router.min',
        ionic: 'lib/ionic/ionic.min',
        ionicAngular: 'lib/ionic/ionic-angular.min',
    },
    shim: {
        angular: {exports: 'angular'},
        angularAnimate: {deps: ['angular']},
        angularSanitize: {deps: ['angular']},
        angularUiRouter: {deps: ['angular']},
        ionic: {deps: ['angular'], exports: 'ionic'},
        ionicAngular: {deps: ['angular', 'ionic', 'angularUiRouter', 'angularAnimate', 'angularSanitize']}
    },
    priority: [
        'angular',
        'ionic'
    ]
});

require([
    'angular',
    'app/app',
    'app/routes'],
        function (angular) {
            'use strict';
            var onDeviceReady = function () {
                angular.bootstrap(document, ['app']);
            };
            document.addEventListener('deviceready', onDeviceReady);
        });