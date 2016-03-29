'use strict';

angular.module('myApp.pageView1', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('app.pageView1', {
                url: '/view1',
                templateUrl: 'view1/observe-books.html',
                controller: 'PageView1Controller',
                controllerAs: 'pageView1'
            });
    }])

    .controller('PageView1Controller', ['MdArr', function(MdArr) {
        var self = this;

        self.shopsBooks = [];
        self.activeGroupId = 1;

        self.p1 = 'Good news for those, who act with angular!';
        console.info(self.p1);

        self.showConsoleInfo = function () {
            console.info('showConsoleInfo');
        };

        self.getGroup = function (id) {
            console.info('getGroup: ' + id);
            MdArr.getMdArrGroup(id).then(function done(data){
                console.info('Arr by id: ' + data);
            });
        };

        self.init = function (groupId){
            MdArr.getMdArrGroups(groupId).then(function done(data){
                console.info(groupId);
                self.shopsBooks = data;
                self.activeGroupId = groupId;
                console.info('init: ', data, self.activeGroupId);
            });
        };
        self.init(self.activeGroupId);

    }]);