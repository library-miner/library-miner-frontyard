'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchTopController', ['$scope', 'RecentProjectService', function ($scope, RecentProjectService) {
    // プロジェクト検索
    $scope.search = function() {
        RecentProjectService.query({ page: 1, per: 10 }, function(response) {
            $scope.projects = response.results;
        });
    };
}]);
