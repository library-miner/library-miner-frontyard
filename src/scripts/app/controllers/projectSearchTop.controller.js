'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchTopController', ['$scope', 'ProjectSearchService', function ($scope, ProjectSearchService) {
    // プロジェクト検索
    $scope.search = function() {
        ProjectSearchService.query({ page: 1, per_page: 10, full_name: $scope.searchKeyword }, function(response) {
            $scope.results = response;
        });
    };
}]);
