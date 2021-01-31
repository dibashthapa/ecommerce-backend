const infrastructure = require('../infrastructure/index');
const root = require('./root');
const auth = require('./auth');
const user = require('./users');
const log = console.log;
const errorLog = console.error;

async function init(config = {}) {
  try {
    log('starting adapters');

    // Add other infra code in this destructured object
    const { rootInfra, userInfra } = await infrastructure.init({});

    const rootService = root.init({ infra: rootInfra });
    const authService = auth.init({ infra: userInfra });
    const userService = user.init({ infra: userInfra });
    return { rootService, authService , userService };
  } catch (error) {
    errorLog(error);
    process.exit(0);
  }
}

module.exports = { init };
