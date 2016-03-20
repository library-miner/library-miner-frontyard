'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchUsingController',
            ['$scope', '$stateParams', 'ProjectSearchService', 'ProjectDetailService',
                function ($scope, $stateParams, ProjectSearchService, ProjectDetailService) {
    // プロジェクト検索
    $scope.id = $stateParams.id;
    $scope.currentPage = 1;

    $scope.setupSelectLibrary = function() {
        ProjectDetailService.query({
            id: $scope.id
        }, function(response) {
            $scope.projectName = response.project.full_name;
        });
    }

    $scope.search = function() {
        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, full_name: $scope.searchKeyword,
            dependency_project_ids: $scope.id
        }, function(response) {
            $scope.totalCount = response.total_count;
            $scope.results = response;
        });
    };

    var initialize = function() {
        $scope.setupSelectLibrary();
        $scope.search();
    };
    initialize();
}]);
