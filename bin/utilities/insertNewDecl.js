const { declToString } = require('./declToString');

exports.insertNewDecl = decl => ([property, value]) => {
  decl.before(declToString(property)(value));
}