const root = require('./root');
const auth = require('./auth');
const error = require('./error');
const user = require('./users');
const apparels = require('./apparels');
const fashions = require('./fashions');
const jewleries = require('./jewelries');
const products = require('./products');
function init(app = {}) {
  const rootHandlers = root.init({ service: app.rootService });
  const authHandlers = auth.init({ service: app.authService });
  const errorHandlers = error.init({});
  const userHandlers = user.init({ service: app.userService });
  const apparelHandlers = apparels.init({ service: app.apparelService });
  const fashionHandlers = fashions.init({ service: app.fashionService });
  const jewelryHandlers = jewleries.init({ service: app.jewelryService });
  const productHandlers = products.init({ service: app.productService });
  // Init handlers here
  return {
    authHandlers,
    rootHandlers,
    errorHandlers,
    fashionHandlers,
    productHandlers,
    jewelryHandlers,
    userHandlers,
    apparelHandlers,
  };
}

module.exports = { init };
