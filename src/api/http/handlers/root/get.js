const { sendResponse } = require("../../utility");
const log = console.log;
const logError = console.error;
const get = (rootService) => async (req, res, next) => {
  let body,
    status,
    responseWriter = res;

  try {
    const rootResponse = await rootService.get({});
    body = rootResponse;
    status = 200;
    headers = {};
  } catch (error) {
    body = { message: error.message };
    status = error.statusCode || 500;
    headers = {};
    logError(error)
  } finally {
    sendResponse({
      responseWriter,
      body,
      status,
    });
  }
};

module.exports = { get };
