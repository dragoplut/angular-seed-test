'use strict';

angular.module('myApp.directives')

    .directive('buttonsUniversal', ['MdArr', function (MdArr){
        return {
            scope: {
                onLoad: '&onLoad',
                groupId: '=ngModel'
            },
            //template: '<div class="btn-block" ng-repeat="btn in buttons"><button class="btn">{{btn.title}}</button></div>',
            templateUrl: 'shared/buttons.html',
            transclude: true,
            link: function (scope){

                scope.buttons = [];
                scope.groups = [];

                scope.$watch('groupId', function () {
                    console.info('$watch', scope.groupId);
                    scope.load({id: scope.groupId});
                });

                scope.load = function (item) {
                    console.info('buttonsUniversal: 2', item);
                    scope.groupId = item.id;
                    MdArr.getMdArrGroups(item.id).then(function done(data){

                        if (data && data.length){
                            scope.groups = data;
                            scope.buttons = MdArr.getParents(data[0]);
                        }
                        //console.info('buttonsUniversal: 3', data, item);
                    });
                };
            }
        };
    }]);