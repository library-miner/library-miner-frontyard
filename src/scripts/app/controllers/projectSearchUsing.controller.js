'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchUsingController',
            ['$scope', '$location', '$stateParams', 'ProjectSearchService', 'ProjectDetailService', 'Constants',
                function ($scope, $location, $stateParams, ProjectSearchService, ProjectDetailService, Constants) {
    // プロジェクト検索
    $scope.id = $stateParams.id;
    $scope.currentPage = 1;
    $scope.sortOrders = Constants.projectSortOrder;

    $scope.setupSelectLibrary = function() {
        ProjectDetailService.query({
            id: $scope.id
        }, function(response) {
            $scope.projectName = response.project.full_name;
        });
    }

    $scope.search = function() {
        $scope.loading = true;

        $location.search({
            q: $scope.searchKeyword, page: $scope.currentPage,
            sortOrder: $scope.sortOrder, projectTypeId: $scope.projectTypeId
        });

        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, full_name: $scope.searchKeyword,
            dependency_project_ids: $scope.id,
            project_type_id: $scope.projectTypeId,
            sort: $scope.sortOrder
        }, function(response) {
            $scope.loading = false;
            $scope.totalCount = response.total_count;
            $scope.results = response;
        });
    };

    var initialize = function() {
        $scope.sortOrder = $location.search()["sortOrder"] || "stargazers_count desc";
        $scope.projectTypeId = $location.search()["projectTypeId"] || Constants.ProjectType.project;
        $scope.setupSelectLibrary();
        $scope.search();
    };
    initialize();
}]);
