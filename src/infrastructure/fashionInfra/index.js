const { findAll } = require('./findAll');

function init({ Fashion }) {
  return {
    findAll: findAll(Fashion),
  };
}

module.exports = { init };
