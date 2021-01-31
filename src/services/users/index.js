const { user } = require('./user');
function init({ infra = {} }) {
  return {
    user: user(infra),
  };
}

module.exports = { init };
