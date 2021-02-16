const { findAll } = require('./findAll');

function init({ Products }) {
  return {
    findAll: findAll(Products),
  };
}

module.exports = { init };
