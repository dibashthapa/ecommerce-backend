const { user } = require('./user');
const { getCurrentUser } = require('./getCurrentUser');
function init({ service = {} }) {
  const userHandler = user(service);
  const getCurrentUserHandler = getCurrentUser();
  return {
    userHandler,
    getCurrentUserHandler,
  };
}
module.exports = { init };
