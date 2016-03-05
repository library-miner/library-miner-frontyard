'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var bootstrap = require('bootstrap'),
    loader = require('./utilities/loader');

// set loader callbacks
function progressCallback() {
}

function completeCallback() {
    require.ensure([], function (require) {
        var angular = require('angular');

        require('./app/app');

        // run app
        angular.bootstrap(document, ['app'], { strictDi: true });
    });
}

$(document).ready(function () {
    // start loader
    loader.createLoader('main', progressCallback, completeCallback);
});
