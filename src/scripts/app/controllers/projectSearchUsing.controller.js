'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchUsingController',
            ['$scope', '$stateParams', 'ProjectSearchService',
                function ($scope, $stateParams, ProjectSearchService) {
    // プロジェクト検索
    $scope.id = $stateParams.id;
    $scope.currentPage = 1;
    // TODO: 直す
    $scope.projectName = "TODO: " + $scope.id + " ここを取るAPIが必要";

    $scope.search = function() {
        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, full_name: $scope.searchKeyword,
            dependency_project_ids: $scope.id
        }, function(response) {
            $scope.totalCount = response.total_count;
            $scope.results = response;
        });
    };
}]);
