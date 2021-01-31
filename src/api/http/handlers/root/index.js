const { get } = require("./get");

function init({ service = {} }) {
  return {
    get: get(service),
  };
}
module.exports = { init };
