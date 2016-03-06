'use strict';

var mServices = require('./_mServices'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

var baseUrl = 'http://192.168.0.19:3000/data';

mServices.factory('RecentProjectService', function ($resource) {
    return $resource(baseUrl + "/recent_projects/index.json", {}, {
        query: { method: 'GET', params: {} }
    });
});
