const { sendResponse } = require('../../utility');
const { secretToken } = require('../../../../commons/config');
const jwt = require('jsonwebtoken');
const getCurrentUser = () => async (req, res, next) => {
  let body,
    headers,
    status,
    responseWriter = res;

  try {
    body = { user: req.user };
    status = 200;
  } catch (error) {
    status = 401;
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
