const { getJewelry } = require('./get');
function init({ service = {} }) {
  const get = getJewelry(service);

  return {
    get,
  };
}
module.exports = { init };
