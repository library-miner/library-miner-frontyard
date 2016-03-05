'use strict';

var dataCommon   = require('../data/loader-common.json'),
  data = {};

data = dataCommon.concat(dataCommon);
module.exports = data;
