'use strict';

var load = require.context('./', false, /.+\.js$/);

load.keys().forEach(load);

module.exports = 'mServices';
