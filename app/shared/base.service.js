'use strict';

angular.module ('myApp.services')

    .factory('BaseService', function ($http, $resource) {

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

        var clientDetailsUpdate = function (row) {

        };

        return {
            clientBase: clientBase,
            clientDetailsUpdate: clientDetailsUpdate
        };
    });