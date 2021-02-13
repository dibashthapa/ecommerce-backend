const { sendResponse } = require('../../utility');
const getCurrentUser = () => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    body = req.user;
    status = 200;
    headers = {};
  } catch (error) {
    console.log(error);
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

module.exports = { getCurrentUser };
