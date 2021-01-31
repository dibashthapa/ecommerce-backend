const { user } = require("./user");

function init({ service = {} }) {
  const userHandler = user(service);
  return {
    userHandler
  };
}
module.exports = { init };
