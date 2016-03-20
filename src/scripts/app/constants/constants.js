'use strict';

var mConstants = require('./_mConstants'),
    loader = require('../../utilities/loader');

mConstants.constant('Constants', {
    ProjectType: {
        project: 1,
        library: 2
    },
    projectSortOrder: [
        ["stargazers_count desc", "スター数 Desc"],
        ["stargazers_count asc", "スター数 Asc"],
        ["github_updated_at desc", "最終更新日 Desc"],
        ["github_updated_at asc", "最終更新日 Asc"]
    ]
});
