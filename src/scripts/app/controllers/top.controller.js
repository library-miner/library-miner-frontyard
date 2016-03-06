'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls.controller('TopController', function ($scope) {
    // 新着プロジェクト
    $scope.recentProjects = [
        {
            'name': 'rake',
            'owner_name': 'testuser',
            'github_url': 'http://github.com/rake/rake',
            'description': ':package: A dynamic way of exploring and packaging REST APIs.',
            'github_created_at': '2015-01-01 03:00:00',
            'github_updated_at': '2015-01-01 03:00:00',
            'stargazers_count': 30,
            'watchers_count': 30
        },
        {
            'name': 'rake',
            'owner_name': 'testuser',
            'github_url': 'http://github.com/rake/rake',
            'description': ':package: A dynamic way of exploring and packaging REST APIs.',
            'github_created_at': '2015-01-01 03:00:00',
            'github_updated_at': '2015-01-01 03:00:00',
            'stargazers_count': 30,
            'watchers_count': 30
        },
        {
            'name': 'rake',
            'owner_name': 'testuser',
            'github_url': 'http://github.com/rake/rake',
            'description': ':package: A dynamic way of exploring and packaging REST APIs.',
            'github_created_at': '2015-01-01 03:00:00',
            'github_updated_at': '2015-01-01 03:00:00',
            'stargazers_count': 30,
            'watchers_count': 30
        }
    ];
});
