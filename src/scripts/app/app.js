'use strict';

var angular = require('angular'),
    ngTouch = require('angular-touch'),
    ngSanitize = require('angular-sanitize'),
    ngResource = require('angular-resource'),
    uiRouter = require('angular-ui-router'),
    mAnimations = require('./animations/_loader'),
    mCtrls = require('./controllers/_loader'),
    mServices = require('./services/_loader');

/*
 *  mDirectives = require('./directives/_loader'),
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
    mServices,
    ngResource,
    'ui.bootstrap'
];

angular
.module('app', dependencies)
.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    'ngInject';

    // Routingの定義
    $stateProvider
    .state('top', {
        url: '/',
        templateUrl: 'templates/views/top.html',
        controller: 'TopController'
    })
    .state('project_search_top', {
        url: '/project_search',
        templateUrl: 'templates/views/top.html',
        controller: 'ProjectSearchTopController'
    })
    ;

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
});
