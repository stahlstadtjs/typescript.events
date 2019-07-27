const CleanCSS = require('clean-css');

module.exports = function(config) {

  config.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addFilter('year', function() {
    return new Date().getFullYear()
  });

  config.addPassthroughCopy('./src/img/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes'
    },
    templateFormats : ['njk', 'md'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
    passthroughFileCopy: true,
  };
}
