const utils = require("./utils");
const postcss = require("postcss");

const tramix = (options = {}) => {
  const mixins = require(options.include);
  const propLoop = utils.mapCustomProps(mixins);

  return root => {
    root.walkRules(rule => {
      propLoop(([property, handler]) => {
        rule.walkDecls(property, decl => {
          const { value } = decl;
          const results = handler(value, decl);
          if (!results) { return }

          results.map(result => {
            decl.before(result);
          });

          decl.remove();
        });
      });
    });
  };
};

module.exports = postcss.plugin("tramix", tramix);
