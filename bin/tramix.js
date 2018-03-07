const postcss = require('postcss');

const { declWalker } = require('./utilities/declWalker');

module.exports = postcss.plugin('tramix', (options = {}) => {
	const mixins = require(require('path').resolve(process.cwd(), options.include));
	return (root) => root.walkRules(declWalker(mixins));
});
