'use strict';

var mFilters = require('./_mFilters'),
    loader = require('../../utilities/loader');

mFilters
.filter('rawHtml', ['$sce', function($sce){
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);
