require.config({
    waitSeconds : 20,
    paths: {
        "angular": "libs/ionic/angular/angular",
        'ionic' : 'libs/ionic/ionic',
        'angularIonic' : 'libs/ionic/ionic-angular',
        "angularSanitize": "libs/ionic/angular/angular-sanitize",
        "angularAnimate": "libs/ionic/angular/angular-animate",
        "angularUiRouter": 'libs/ionic/angular-ui/angular-ui-router',

    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angularAnimate": {
            deps: ["angular"]
        },
        "angularSanitize": {
            deps: ["angular"]
        },
        "angularUiRouter" : {
            deps:["angular"]
        },
      'angularIonic' : {
            deps : [
                'angularAnimate',
                'angularSanitize',
                'angularUiRouter'
            ]
        }
    }
});

require([
        "angular",
        "app/namespace",
        "ionic",
        "angularUiRouter",
        "app/app",
        "app/routes"
    ],
    function (angular, appNS) {
        var onDeviceReady = function () {
            angular.bootstrap(document, [appNS]);
        };
        document.addEventListener("deviceready", onDeviceReady);
    });