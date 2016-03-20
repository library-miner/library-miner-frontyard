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

    $scope.search = function() {
        // something
    };

    var initialize = function() {
        $scope.search();
    };
    initialize();
}]);
