'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchTopController',
            ['$scope', '$location', '$stateParams', 'ProjectSearchService',
                function ($scope, $location, $stateParams, ProjectSearchService) {
    // プロジェクト検索
    $scope.search = function() {
        $location.search({q: $scope.searchKeyword, page: $scope.currentPage});

        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, full_name: $scope.searchKeyword
        }, function(response) {
            $scope.totalCount = response.total_count;
            $scope.results = response;
        });
    };

    var initialize = function() {
        var searchKeyword = $location.search()["q"];
        $scope.currentPage = $location.search()["page"];

        if (searchKeyword) {
            $scope.searchKeyword = searchKeyword;
            $scope.totalCount = Number.MAX_VALUE; // Pageが常に1に戻ってしまう問題回避
            $scope.search();
        }
    };
    initialize();
}]);
