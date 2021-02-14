const { getApparel } = require('./get');
function init({ service = {} }) {
  const get = getApparel(service);

  return {
    get,
  };
}
module.exports = { init };
