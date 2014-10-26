/*global define, require, console, cordova, navigator */

require(['ionic',
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
