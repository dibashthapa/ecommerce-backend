const { findAll } = require('./findAll');
const { findById } = require('./findById');

function init({ Apparel }) {
  return {
    findAll: findAll(Apparel),
    findById: findById(Apparel),
  };
}

module.exports = { init };
