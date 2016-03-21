'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
    .controller('TopController', [
        '$scope',
        'RecentProjectService',
        'RecentLibraryService',
        function($scope, RecentProjectService, RecentLibraryService) {
            // 新着プロジェクト
            RecentProjectService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.recentProjects = response.results;
            });

            // 新着ライブラリ
            RecentLibraryService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.recentLibraries = response.results;
            });
        }
    ]);
