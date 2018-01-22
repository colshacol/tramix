const toRegex = require("to-regex");

const { declHandler } = require("./declHandler");

exports.declWalker = mixins => rule => {
  const customDecls = toRegex(Object.keys(mixins));
  rule.walkDecls(customDecls, declHandler(mixins));
};
