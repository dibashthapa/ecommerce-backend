const { sendResponse, logger } = require('../../utility');

const login = (authService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { email, password } = req.body;
    const { token } = await authService.login({ email, password });
    body = { token };
    status = 200;
    logger.info('Hello');
  } catch (error) {
    logger.error(error);
    status = error.status || 500;
    headers = {};
    body = JSON.parse(error.message);
  } finally {
    sendResponse({
      responseWriter,
      body,
      status,
      headers,
    });
  }
};

module.exports = { login };
