const { declToString } = require('./declToString');

exports.insertNewDecl = (decl) => ([property, value]) => {
	return decl.before(declToString(property)(value));
};
