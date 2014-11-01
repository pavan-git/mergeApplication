define([
        "angular",
        "./namespace",
        "./common/namespace",
        "./login/namespace",
        "./signup/namespace",
        "./home/namespace",
        "./area/namespace",
        "ionic",
        "angularUiRouter",
        "angularAnimate",
        "angularIonic",
        "./common/module.require",
        "./login/module.require",
        "./home/module.require",
        "./signup/module.require",
        "./area/module.require"
    ],
    function (angular, appNS, commonNS, loginNS, signupNS, homeNS, areaNS) {
        "use strict";
        var app = angular.module(appNS, [
            "ionic",
            "ngAnimate",
            "ui.router",
            commonNS,
            loginNS,
            signupNS,
            homeNS,
            areaNS
        ]).run(function () {
            //
        });
        return app;
    });