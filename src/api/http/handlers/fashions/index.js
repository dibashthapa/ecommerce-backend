const { getFashion } = require('./get');
function init({ service = {} }) {
  const get = getFashion(service);

  return {
    get,
  };
}
module.exports = { init };
