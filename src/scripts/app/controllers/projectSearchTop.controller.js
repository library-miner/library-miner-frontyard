'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchTopController',
            ['$scope', '$location', 'ProjectSearchService',
                function ($scope, $location, ProjectSearchService) {
    // プロジェクト検索
    $scope.currentPage = 1;
    $scope.search = function() {
        $location.search({q: $scope.searchKeyword});

        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, full_name: $scope.searchKeyword
        }, function(response) {
            $scope.totalCount = response.total_count;
            $scope.results = response;
        });
    };
}]);
