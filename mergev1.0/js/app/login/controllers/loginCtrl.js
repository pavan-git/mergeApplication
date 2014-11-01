define([
    '../module',
    '../namespace',
    '../../common/namespace'
], function (module, namespace, namespaceCommon) {

    var name = namespace + '.loginCtrl';

    // var dependencies = ['$scope', '$stateParams', namespaceCommon + '.EmployeeService'];
    // var controller = function ($scope, $stateParams, EmployeeService) {
    //     var vm = this;
    //     EmployeeService.findById($stateParams.employeeId).then(function (employee) {
    //         vm.employee = employee;
    //     });
    // };

    var deps = ["$scope"];
    var controller = function ($scope) {
        var vm = this;
    };
    module.controller(name, deps.concat(controller));

});