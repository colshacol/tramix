const STRING = 'STUB';

const MIXINS = {
	[STRING]: (x) => ({
		barBaz: x
	})
};

const DECL = {
	prop: STRING,
	value: STRING,
	remove: jest.fn(),
	before: jest.fn()
};

const RULE = {
	walkDecls: jest.fn()
};

module.exports = {
	STRING,
	MIXINS,
	DECL,
	RULE
};
