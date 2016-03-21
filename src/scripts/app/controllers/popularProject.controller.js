'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
    .controller('PopularProjectController', [
        '$scope',
        'PopularProjectService',
        'PopularLibraryService',
        function($scope,
            PopularProjectService,
            PopularLibraryService) {
            // 人気のプロジェクト
            PopularProjectService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.popularProjects = response.results;
            });

            // 人気のライブラリ
            PopularLibraryService.query({
                page: 1,
                per: 10
            }, function(response) {
                $scope.popularLibraries = response.results;
            });
        }
    ]);
