const { insertNewDecl } = require('../insertNewDecl');

jest.mock('../declToString', () => ({
	declToString: () => () => true
}));

test('should invoke DECL.before()', () => {
	const result = insertNewDecl(STUBS.DECL)([STUBS.STRING, STUBS.STRING]);
	expect(STUBS.DECL.before).toHaveBeenCalled();
});
