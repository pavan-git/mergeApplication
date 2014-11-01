define([
        "../module",
        "../namespace",
        "../../common/namespace",
        "../../config"
        
    ],
    function (module, moduleNS,commonNS, appConfig) {
        'use strict';
        var name = moduleNS + ".homeCtrl";
        var deps = ["$scope",commonNS+".emailService",commonNS+".Loader"];
        
        var controller = function ($scope, emailService,Loader) {
            var vm = this;
            vm.appTitle = appConfig.appTitle;
            Loader.show();
            emailService.getEmails().then(function(emails){
                Loader.hide();
                vm.emails = emails;
            });
            
        };
        
        module.controller(name, deps.concat(controller));
    });