'use strict';

angular.module ('myApp.services')

    .factory('BaseService', ['$http', '$resource', function ($http, $resource) {

        //return $resource('http://apishop.herokuapp.com/client');

        var clientBase = function (searchRequest) {
            var client;
            console.info(searchRequest);
            if (searchRequest) {
                client = $resource('http://apishop.herokuapp.com/client?where={"' + searchRequest.option + '":"' + searchRequest.request + '"}');
                console.info('Client by option.');
            } else {
                client = $resource('http://apishop.herokuapp.com/client');
                console.info('All clients.');
            }
            return client.query();
        };

        var clientCreate = function (data) {
            $http({
                url: 'http://apishop.herokuapp.com/client/',
                method: 'POST',
                data: data
            }).then(function () {
                console.info('Add to base success!');
            });
        };

        var clientDetailsUpdate = function (id, updateData) {
            $http({
                url: 'http://apishop.herokuapp.com/client/' + id,
                method: 'PUT',
                data: updateData
            });
        };

        var clientRemove = function (data){
            $http({
                url: 'http://apishop.herokuapp.com/client/' + data.id,
                method: 'DELETE'
            }).then(function () {
                console.info('Client ' + data.firstName + ' ' + data.lastName + ' removed from base.');
            });
        };

        return {
            clientBase: clientBase,
            clientCreate: clientCreate,
            clientDetailsUpdate: clientDetailsUpdate,
            clientRemove: clientRemove
        };
    }]);