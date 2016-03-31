'use strict';

angular.module('myApp.view2', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('app.view2', {
                url: '/view2',
                templateUrl: 'view2/view2.html',
                controller: 'View2',
                controllerAs: 'view2'
            });
    }])

    .controller('View2', ['BaseService', 'ngDialog', function(BaseService, ngDialog) {
        var self = this;

        var searchRequest = {option: 'id', request: '562b8c3ac25c700300b4b026'};

        //self.base = BaseService.clientBase(searchRequest);

        self.p1 = 'Good news for those, who act with angular!';

        self.base = BaseService.query();
        self.oneClient = BaseService.query({where:{id: searchRequest.request}});

        self.oneClientDetails = function (row){
            console.info(row);
            ngDialog.open({
                template: 'shared/oneClient.dialog.html',
                className: 'ngdialog-theme-default',
                showClose: false,
                controller: ['$scope', 'BaseService', function ($scope, BaseService){
                    $scope.row = row;
                }]
            });
        };

        self.showConsoleInfo = function (show) {
            console.info(show);
        };

    }]);