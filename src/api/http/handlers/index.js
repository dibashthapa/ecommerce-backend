const root = require("./root");
const auth = require("./auth");
const error = require("./error");
const user = require("./users")
function init(app = {}) {
  const rootHandlers = root.init({ service: app.rootService });
  const authHandlers = auth.init({ service: app.authService });
  const errorHandlers = error.init({});
  const userHandlers = user.init({ service: app.userService })
  
  // Init handlers here
  return {
    authHandlers,
    rootHandlers,
    errorHandlers,
    userHandlers
  };
}

module.exports = { init };
