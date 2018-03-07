const decamelizeKeys = require('decamelize-keys');

const { insertNewDecl } = require('./insertNewDecl');

const normalizeRule = (rule) => {
	const _rule = {};

	rule.walkDecls((decl) => {
		_rule[decl.prop] = decl.value;
	});

	return _rule;
};

exports.declHandler = (mixins) => (rule) => (decl) => {
	Object.entries(
		decamelizeKeys(mixins[decl.prop](decl.value, normalizeRule(rule)), '-')
	).forEach(insertNewDecl(decl));

	return decl.remove();
};
