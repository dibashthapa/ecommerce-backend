const { sendResponse } = require("../../utility");

const login = (authService) => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    const { email, password } = req.body;
    const { token } = await authService.login({ email, password });
    headers = {
      "x-curl-token": token,
    };
    body = {};

    status = 204;
  } catch (error) {
    status = error.status || 500;
    headers = {};
    body = {};
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
