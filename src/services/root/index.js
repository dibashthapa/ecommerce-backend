const { get } = require("./get");

function init({ infra = {} }) {
  return {
    get: get(infra),
  };
}

module.exports = { init };
