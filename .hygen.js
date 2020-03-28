const { classify } = require('inflection');

module.exports = {
  helpers: {
    className: s => classify(s.replace(/[- ]/g, '_'))
  }
};
