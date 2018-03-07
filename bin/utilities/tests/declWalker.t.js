const { declWalker } = require('../declWalker');

test('should generate the correct string', () => {
	const result = declWalker(STUBS.MIXINS)(STUBS.RULE);
	expect(STUBS.RULE.walkDecls).toHaveBeenCalled();
});
