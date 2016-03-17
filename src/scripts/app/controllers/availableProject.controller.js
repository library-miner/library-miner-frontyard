'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
    .controller('AvailableProjectController', ['$scope', 'AvailableProjectService', function($scope, AvailableProjectService) {
        // 利用可能なプロジェクト
        AvailableProjectService.query({},
            function(response) {
                var items = response.items;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].project_language == 'Ruby') {
                        $scope.rubyProjectCount = items[i].projects_count;
                        $scope.rubyLibraryCount = items[i].library_count;
                    }
                }
            });
    }]);
