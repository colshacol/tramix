const { declHandler } = require('../declHandler');

jest.mock('../insertNewDecl', () => ({
	insertNewDecl: () => () => true
}));

test('should invoke DECL.remove()', () => {
	const result = declHandler(STUBS.MIXINS)(STUBS.RULE)(STUBS.DECL);

	expect(STUBS.DECL.remove).toHaveBeenCalled();
});
