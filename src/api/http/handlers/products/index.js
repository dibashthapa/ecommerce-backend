const { getProduct } = require('./get');
function init({ service = {} }) {
  const get = getProduct(service);

  return {
    get,
  };
}
module.exports = { init };
