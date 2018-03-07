const { declToString } = require('../declToString');

test('should generate the correct string', () => {
	const result = declToString(STUBS.STRING)(STUBS.STRING);
	expect(result).toBe(`\n\tSTUB: STUB;\n`);
});
