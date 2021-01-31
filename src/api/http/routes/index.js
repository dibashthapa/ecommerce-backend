const { checkAuth } = require('../middleware/auth');
function init(router, handlers) {
  console.log('loading routes');
  // Fill in routes, can multiplex to more files, if required
  router.route('/').get(handlers.rootHandlers.get).all(handlers.errorHandlers.notAllowedHandler);

  router
    .route('/auth/login')
    .post(handlers.authHandlers.loginHandler)
    .all(handlers.errorHandlers.notAllowedHandler);

  router
    .route('/auth/register')
    .post(handlers.authHandlers.registerHandler)
    .all(handlers.errorHandlers.notAllowedHandler);

  router
    .route('/user/:userId')
    .get(checkAuth, handlers.userHandlers.userHandler)
    .all(handlers.errorHandlers.notAllowedHandler);
  // 404 handlers, handle 405 in individual route like above

  router.route('*').all(handlers.errorHandlers.notFoundHandler);
}

module.exports = { init };
