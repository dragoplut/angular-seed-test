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

    .controller('View2', ['MdArr', function(MdArr) {
        var self = this;

        self.p1 = 'Good news for those, who act with angular!';

    }]);