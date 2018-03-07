const fs = require('fs');
const path = require('path');

global.STUBS = require('./stubs');

global.TEST_PLUGIN_OPTIONS = {
	include: path.resolve(__dirname, './testMixins.js')
};
