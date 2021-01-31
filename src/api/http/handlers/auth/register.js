const { sendResponse } = require('../../utility');

const register = (authService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { email, password, fullname } = req.body;

    const { token } = await authService.register({
      fullname,
      email,
      password,
    });

    headers = {
      'x-curl-token': token,
    };
    body = {};
    status = 201;
  } catch (error) {
    status = error.status || 500;
    headers = {};
    const { message } = error;
    body = { message };
  } finally {
    sendResponse({
      responseWriter,
      body,
      status,
      headers,
    });
  }
};

module.exports = { register };
