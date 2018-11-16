var postcss = require('postcss');

module.exports = postcss.plugin('postcss-media-directives', (options = {}) => {
  
//  const root = postcss.parse('');
  
return root => {
  root.walkAtRules(rule => {
      if (rule.name === 'miw') {
        rule.name = 'media'
        let value = /\d+/.exec(rule.params);
        rule.params = `(min-width: ${value}px)`;
      }
      if (rule.name === 'maw') {
        rule.name = 'media'
        let value = /\d+/.exec(rule.params);
        rule.params = `(max-width: ${value}px)`;
      }
    })
  };
});
