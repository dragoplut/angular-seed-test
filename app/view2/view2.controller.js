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

        self.base = BaseService.clientBase();
        self.oneClient = BaseService.clientBase(); // BaseService.clientBase({option: 'id', request: ''})



        self.oneClientDetails = function (row){
            console.info(row);
            ngDialog.open({
                template: 'shared/oneClient.dialog.html',
                className: 'ngdialog-theme-default',
                showClose: true,
                controller: ['$scope', 'BaseService', function ($scope, BaseService){
                    $scope.oneRow = row;
                    $scope.clientUpdate = function (clientRow) {
                        console.info(clientRow);

                        for (var i = 0; i < self.base.length; i++){
                            if (self.base[i]){

                            }
                        }

                        delete (clientRow.id);
                        BaseService.update(clientRow);
                        console.info('update');
                    };
                }]
            });
        };

        self.showConsoleInfo = function (show) {
            console.info(show);
        };

    }]);

// git clone https://DragoPlut@bitbucket.org/zenthermostat/web-portal-ui.git
// git clone git@bitbucket.org:zenthermostat/web-portal-ui.git