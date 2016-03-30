'use strict';

angular.module ('myApp.services')

    .factory('BaseService', function ($resource) {
        return $resource('http://apishop.herokuapp.com/order');
    });