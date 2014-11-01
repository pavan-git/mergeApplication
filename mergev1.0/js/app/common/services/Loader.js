define([
        "../module",
        "../namespace"
    ],
    function (module, moduleNS) {
        "use strict";
        var name = moduleNS + ".Loader";
        var dependencies = ["$rootScope", "$ionicLoading"];
        var service = function ($rootScope, $ionicLoading) {

            return {
                show: function () {
                    $rootScope.loading = $ionicLoading.show({

                        // The text to display in the loading indicator
                        content: "Loading",

                        // The animation to use
                        animation: "fade-in",

                        // Will a dark overlay or backdrop cover the entire view
                        showBackdrop: true,

                        // The maximum width of the loading indicator
                        // Text will be wrapped if longer than maxWidth
                        maxWidth: 200,

                        // The delay in showing the indicator
                        showDelay: 500
                    });
                },

                hide: function () {
                    $ionicLoading.hide();
                }
            };
        };

        module.factory(name, dependencies.concat(service));
    });