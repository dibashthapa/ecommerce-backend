const { login } = require("./login");
const { register } = require("./register");
function init({ service = {} }) {
  const loginHandler = login(service);
  const registerHandler = register(service);
  return {
    loginHandler,
    registerHandler,
  };
}
module.exports = { init };
