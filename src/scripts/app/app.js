'use strict';

var angular = require('angular'),
    ngTouch = require('angular-touch'),
    ngSanitize = require('angular-sanitize'),
    uiRouter = require('angular-ui-router'),
    mAnimations = require('./animations/_loader'),
    mCtrls = require('./controllers/_loader');
/*
   mDirectives = require('./directives/_loader'),
   mServices = require('./services/_loader');
   */

/**
 * Register main angular app
 */

require('angular-bootstrap-npm');

var dependencies = [
    ngTouch,
    ngSanitize,
    uiRouter,
    mAnimations,
    mCtrls,
    'ui.bootstrap'
];

angular
.module('app', dependencies)
.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    'ngInject';

    $stateProvider
    .state('top', {
        url: '/',
        templateUrl: 'templates/views/top.html',
        controller: 'TopController'
    })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
});
