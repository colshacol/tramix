const postcss = require("postcss");

const { declWalker } = require("./utilities/declWalker");

const tramix = (options = {}) => {
  const mixins = require(options.include);

  return root => {
    root.walkRules(rule => {
      declWalker(mixins)(rule);
    });
  };
};

module.exports = postcss.plugin("tramix", tramix);
