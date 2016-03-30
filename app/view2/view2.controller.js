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

    .controller('View2', ['BaseService', function(BaseService) {
        var self = this;

        self.p1 = 'Good news for those, who act with angular!';

        self.base = BaseService.query();

        self.showConsoleInfo = function () {
            console.info(self.base);
        };

    }]);