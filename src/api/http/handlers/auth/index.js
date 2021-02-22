const { login } = require('./login');
const { register } = require('./register');
const { verify } = require('./verify');
function init({ service = {} }) {
  const loginHandler = login(service);
  const registerHandler = register(service);
  const verifyHandler = verify();
  return {
    loginHandler,
    registerHandler,
    verifyHandler,
  };
}
module.exports = { init };
