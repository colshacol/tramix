const { declHandler } = require('./declHandler');
const { toRegEx } = require('./toRegEx');

exports.declWalker = (mixins) => (rule) => {
	return rule.walkDecls(toRegEx(Object.keys(mixins)), declHandler(mixins)(rule));
};
