'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
    .controller('TopController', [
        '$scope',
        'RecentCreatedProjectService',
        'RecentCreatedLibraryService',
        'RecentUpdatedProjectService',
        'RecentUpdatedLibraryService',
        function($scope,
            RecentCreatedProjectService,
            RecentCreatedLibraryService,
            RecentUpdatedProjectService,
            RecentUpdatedLibraryService) {
            // 新着プロジェクト
            RecentCreatedProjectService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.recentCreatedProjects = response.results;
            });

            // 新着ライブラリ
            RecentCreatedLibraryService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.recentCreatedLibraries = response.results;
            });

            // 更新プロジェクト
            RecentUpdatedProjectService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.recentUpdatedProjects = response.results;
            });

            // 更新ライブラリ
            RecentUpdatedLibraryService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.recentUpdatedLibraries = response.results;
            });
        }
    ]);
