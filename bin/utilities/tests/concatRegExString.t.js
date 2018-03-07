const { concatRegExString } = require('../concatRegExString');

test('should return a value of type "string"', () => {
	const result0 = concatRegExString(STUBS.STRING, STUBS.STRING, STUBS.STRING);
	expect(typeof result0).toEqual('string');
});

test('should preserve the final string argument', () => {
	const result = concatRegExString(STUBS.STRING, STUBS.STRING, true);
	expect(result).toEqual('STUBSTUB');
});

test('should replace all "$" with "\\$"', () => {
	const result = concatRegExString(STUBS.STRING, '$abc$de$fgh', true);
	expect(result).toEqual('STUB\\$abc\\$de\\$fgh');
});

test('should insert "|" if the `final` argument is falsey', () => {
	const result0 = concatRegExString(STUBS.STRING, STUBS.STRING, false);
	const result1 = concatRegExString(STUBS.STRING, STUBS.STRING, null);
	expect(result0).toEqual('STUBSTUB|');
	expect(result1).toEqual('STUBSTUB|');
});

test('should not insert "|" if the `final` argument is truthy', () => {
	const result0 = concatRegExString(STUBS.STRING, STUBS.STRING, true);
	const result1 = concatRegExString(STUBS.STRING, STUBS.STRING, STUBS.STRING);
	expect(result0).toEqual('STUBSTUB');
	expect(result1).toEqual('STUBSTUB');
});
