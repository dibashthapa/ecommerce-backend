const { sendResponse } = require("../../utility");

const notFound = () => async (req, res, next) => {
  let body,
    status,
    headers,
    responseWriter = res;

  try {
    body = { message: "Route not found" };
    headers = {};
    status = 404;
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

module.exports = { notFound };
