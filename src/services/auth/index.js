const { login } = require("./login");
const { register } = require("./register");
function init({ infra = {} }) {
  return {
    login: login(infra),
    register: register(infra),
  };
}

module.exports = { init };
