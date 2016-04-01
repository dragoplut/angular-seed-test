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

        //var searchRequest = {option: 'id', request: '562b8c3ac25c700300b4b026'};
        //self.base = BaseService.clientBase(searchRequest);

        self.p1 = 'Good news for those, who act with angular!';

        self.base = BaseService.clientBase();
        //self.oneClient = BaseService.clientBase(); // BaseService.clientBase({option: 'id', request: ''})

        self.oneClientRemove = function (row) {
            if (confirm('Do you really want to remove client ' + row.firstName + ' ' + row.lastName + '?')){
                BaseService.clientRemove(row);
            }
        };

        self.oneClientDetails = function (row){
            console.info(row);
            ngDialog.open({
                template: 'shared/oneClient.dialog.html',
                className: 'ngdialog-theme-default',
                showClose: true,
                controller: ['$scope', 'BaseService', function ($scope, BaseService){
                    $scope.oneRow = $.extend({}, row);

                    /**
                     * Updates client's data in server
                     * Requires clientRow.id exist on server
                     * @param clientRow
                     */
                    $scope.clientUpdate = function (clientRow) {
                        //console.info(clientRow);
                        var changesToUpdate = {};
                        for (var i = 0; i < self.base.length; i++){
                            if (self.base[i].id === clientRow.id){
                                for (var item in self.base[i]){
                                    if (clientRow.hasOwnProperty(item)){
                                        if (self.base[i][item] !== clientRow[item]){
                                            changesToUpdate[item] = clientRow[item];
                                        }
                                    }
                                }
                                console.info('To update data: ', changesToUpdate);
                                BaseService.clientDetailsUpdate(clientRow.id, changesToUpdate);
                            }
                        }
                        //console.info('update');
                    };

                    /**
                     * Create new client in server
                     * Warning: works only if !data.id
                     * @param data
                     */
                    $scope.clientCreate = function (data) {
                        console.info(data);
                        BaseService.clientCreate(data)
                    }
                }]
            });
        };

        self.showConsoleInfo = function (show) {
            console.info(show);
        };

    }]);
