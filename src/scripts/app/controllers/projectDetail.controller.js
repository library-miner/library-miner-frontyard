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

    $scope.setupSelectProject = function() {
        ProjectDetailService.query({
            id: $scope.id
        }, function(response) {
            $scope.project = response.project;
        });
    };

    var initialize = function() {
        $scope.setupSelectProject();
    };
    initialize();
}]);
