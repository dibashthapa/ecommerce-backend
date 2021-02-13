const { get } = require("./get");

function init({ db }) {
  return {
    get: get(db),
  };
}

module.exports = { init };
