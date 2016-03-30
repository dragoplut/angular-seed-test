'use strict';

var myApp = angular.module('myApp', [
    'ui.router',
    'myApp.pageView1',
    'myApp.view2',
    'myApp.services',
    'myApp.directives',
    'myApp.version'
]);

myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/view1');

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'shared/layout.html',
                controller: ['$scope', function ($scope) {
                    $scope.accessLevel = 9999;
                }]
            })
    }]);

myApp.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        console.info('myApp.run');
    }
]);

angular.module('myApp.directives', []);
angular.module('myApp.services', ['ngResource']);