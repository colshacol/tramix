const decamelizeKeys = require("decamelize-keys");

const { insertNewDecl } = require("./insertNewDecl");

exports.declHandler = mixins => decl => {
  const result = mixins[decl.prop](decl.value);
  const results = Object.entries(decamelizeKeys(result, "-"));
  results.forEach(insertNewDecl(decl));
  decl.remove();
};
