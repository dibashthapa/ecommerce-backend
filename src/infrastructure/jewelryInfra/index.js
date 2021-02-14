const { findAll } = require('./findAll');

function init({ Jewelry }) {
  return {
    findAll: findAll(Jewelry),
  };
}

module.exports = { init };
