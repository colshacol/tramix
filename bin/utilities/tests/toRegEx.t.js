const { toRegEx } = require('../toRegEx');

test('should return a RegExp instance', () => {
	const result = toRegEx([STUBS.STRING]);
	expect(result instanceof RegExp).toBe(true);
});

test('should contain the correct RegExp string value', () => {
	const result = toRegEx([STUBS.STRING]);
	expect(String(result)).toBe('/^(STUB)$/');
});
