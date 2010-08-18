var fs = require('fs');
global.window = {};
global.navigator = {};

require('util/underscore');
require('application');

_.extend(exports, global.app);
