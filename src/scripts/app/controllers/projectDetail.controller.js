'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectDetailController',
            ['$scope', '$stateParams', 'ProjectSearchService', 'ProjectDetailService', 'Constants',
                function ($scope, $stateParams, ProjectSearchService, ProjectDetailService, Constants) {
    $scope.id = $stateParams.id;

    // プロジェクト詳細検索
    $scope.setupSelectProject = function() {
        ProjectDetailService.query({
            id: $scope.id
        }, function(response) {
            $scope.project = response.project;
        });
    };

    // 利用ライブラリ検索
    $scope.searchLibraries = function(page) {
        $scope.currentPage = page;
        $scope.loadingLibrary = true;
        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, using_project_id: $scope.id
        }, function(response) {
            $scope.loadingLibrary = false;
            $scope.totalCount = response.total_count;
            $scope.libraryResults = response.items;
        });
    }

    var initialize = function() {
        $scope.setupSelectProject();
        $scope.searchLibraries();
    };
    initialize();
}]);
