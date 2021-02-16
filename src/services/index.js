const infrastructure = require('../infrastructure/index');
const root = require('./root');
const auth = require('./auth');
const user = require('./users');
const apparel = require('./apparel');
const fashion = require('./fashion');
const jewelery = require('./jewelery');
const product = require('./products');
const log = console.log;
const errorLog = console.error;

async function init(config = {}) {
  try {
    log('starting adapters');

    // Add other infra code in this destructured object
    const {
      rootInfra,
      userInfra,
      apparelInfra,
      fashionInfra,
      jewelryInfra,
      productInfra,
    } = await infrastructure.init({});
    const rootService = root.init({ infra: rootInfra });
    const authService = auth.init({ infra: userInfra });
    const apparelService = apparel.init({ infra: apparelInfra });
    const fashionService = fashion.init({ infra: fashionInfra });
    const jewelryService = jewelery.init({ infra: jewelryInfra });
    const userService = user.init({ infra: userInfra });
    const productService = product.init({ infra: productInfra });
    return {
      rootService,
      authService,
      userService,
      apparelService,
      productService,
      fashionService,
      jewelryService,
    };
  } catch (error) {
    errorLog(error);
    process.exit(0);
  }
}

module.exports = { init };
