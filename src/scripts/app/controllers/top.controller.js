'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls.controller('TopController', ['$scope', 'RecentProjectService', function ($scope, RecentProjectService) {
    // 新着プロジェクト
    RecentProjectService.query({}, function(response) {
        $scope.recentProjects = response.results;
    });
}]);
