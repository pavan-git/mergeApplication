define([
        "../module",
        "../namespace",
        "../../common/namespace",
        "../../config"
        
    ],
    function (module, moduleNS,commonNS, appConfig) {
        'use strict';
        var name = moduleNS + ".homeCtrl";
        var deps = ["$scope",commonNS+".emailService"];
        
        var controller = function ($scope, emailService) {
            var vm = this;
            vm.appTitle = appConfig.appTitle;
            emailService.getEmails().then(function(emails){
                vm.emails = emails;
                console.log(vm);
            });
            
        };
        
        module.controller(name, deps.concat(controller));
    });