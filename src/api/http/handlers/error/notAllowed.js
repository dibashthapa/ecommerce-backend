const { sendResponse } = require("../../utility");

const notAllowed = () => async (req, res, next) => {
  let body,
    status,
    headers,
    responseWriter = res;

  try {
    body = { message: "not allowed " };
    headers = {};
    status = 405;
  } catch (err) {
    headers = {};
    status = err.status || 500;
    body = {};
  } finally {
    sendResponse({
      responseWriter,
      body,
      headers,
      status,
    });
  }
};

module.exports = { notAllowed };
